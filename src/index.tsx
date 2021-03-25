import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

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
import createStore, {
  closeModal,
  createNotification,
  logout,
  openModal
} from '@store';

// Styles
import 'animate.css';
import '@fortawesome/fontawesome-pro/css/all.min.css';

// Utils
import * as serviceWorker from '@utils/serviceWorker';

const store = createStore();

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

  return new Observable((subscriber): any => {
    if (isUnauthorized) {
      store.dispatch(
        createNotification({
          description: 'You must log in to continue',
          id: 'unauthorized',
          title: 'Unauthorized!',
          timeout: 5000,
          variant: 'danger'
        })
      );

      store.dispatch(logout());
    } else if (isForbidden) {
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

const httpLink = new HttpLink({
  credentials: 'include',
  uri:
    process.env.NODE_ENV === 'development'
      ? 'http://api.fleetly.me/graphql'
      : 'https://api.fleetly.it/graphql'
});

const wsLink = new WebSocketLink({
  uri:
    process.env.NODE_ENV === 'development'
      ? 'ws://api.fleetly.me/graphql'
      : 'wss://api.fleetly.it/graphql',
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

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([errorLink, splitLink])
  // request: (operation) => {
  //   if (operation.variables) {
  //     operation.variables = JSON.parse(
  //       JSON.stringify(operation.variables),
  //       (key: any, value: any) => (key === '__typename' ? undefined : value)
  //     );
  //   }
  // }
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
