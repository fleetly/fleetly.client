import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'utils/charts';

// Apollo
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  HttpLink,
  Observable,
  split
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

// App
import App from './App';

// Constants
import { SUDO_MODAL } from '@constants';

// Store
import createStore, { closeModal, logout, openModal } from '@store';

// Styles
import 'animate.css';
import '@fortawesome/fontawesome-pro/css/all.min.css';

// Utils
import * as serviceWorker from '@utils/serviceWorker';

let refreshTokenOperation: any = null;
const store = createStore();

const httpLink = new HttpLink({
  credentials: 'include',
  uri: 'https://api.fleetly.it/graphql'
});

const wsLink = new WebSocketLink({
  uri: 'wss://api.fleetly.it/graphql',
  options: {
    reconnect: true
  }
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);

    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const clearTypenameLink = new ApolloLink((operation, forward) => {
  if (operation.variables) {
    operation.variables = JSON.parse(
      JSON.stringify(operation.variables),
      (key: any, value: any) => (key === '__typename' ? undefined : value)
    );
  }

  return forward(operation);
});

const errorLink = onError(({ forward, graphQLErrors, operation }) => {
  let isUnauthorized = false;
  let isForbidden = false;

  graphQLErrors?.forEach(({ message }: any) => {
    switch (message) {
      case 'Forbidden':
        isForbidden = true;
        break;
      case 'Unauthorized':
        isUnauthorized = true;
        break;
      default:
        break;
    }
  });

  if (isUnauthorized) {
    (wsLink as any).subscriptionClient.close();

    if (refreshTokenOperation && refreshTokenOperation.map) {
      return refreshTokenOperation.map(() => forward(operation));
    } else {
      refreshTokenOperation = forward(operation);

      if (refreshTokenOperation.map) {
        refreshTokenOperation = forward(operation)?.map((response: any) => {
          response.errors
            ? store.dispatch(logout())
            : (wsLink as any).subscriptionClient.connect();

          return response;
        });
      }

      return refreshTokenOperation;
    }
  }

  return new Observable((subscriber): any => {
    if (isForbidden) {
      new Promise((resolve, reject) => {
        const unsubscribe = store.subscribe(() => {
          const state = store.getState();
          !state.modals[SUDO_MODAL] && reject(graphQLErrors);
        });

        store.dispatch(
          openModal(SUDO_MODAL, {
            data: {
              onSubmitSuccess: () => {
                unsubscribe();
                store.dispatch(closeModal(SUDO_MODAL));
                resolve(true);
              }
            }
          })
        );
      })
        .then(() => {
          forward(operation).subscribe(subscriber);
        })
        .catch((errors) => {
          subscriber.next({ errors });
          subscriber.complete();
        });
    } else {
      subscriber.next({ errors: graphQLErrors });
      subscriber.complete();
    }

    return subscriber;
  });
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([clearTypenameLink, errorLink, splitLink])
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client as any}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
