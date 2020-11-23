import ApolloClient, { Observable } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

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

const store = createStore();

const client: ApolloClient<InMemoryCache> = new ApolloClient({
  cache: new InMemoryCache(),
  credentials: 'include',
  onError: ({ forward, graphQLErrors, operation }) => {
    let isForbidden = false;

    graphQLErrors?.forEach(({ message }: any) => {
      switch (message) {
        case 'Forbidden':
          isForbidden = true;
          break;
        case 'Unauthorized':
          store.dispatch(logout());
          break;
        default:
          break;
      }
    });

    if (isForbidden) {
      return new Observable((subscriber): any => {
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

        return subscriber;
      });
    }
  },
  request: (operation) => {
    if (operation.variables) {
      operation.variables = JSON.parse(
        JSON.stringify(operation.variables),
        (key: any, value: any) => (key === '__typename' ? undefined : value)
      );
    }
  },
  uri: `http${
    process.env.NODE_ENV === 'production' ? 's' : ''
  }://api.fleetly.it/graphql`
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
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
