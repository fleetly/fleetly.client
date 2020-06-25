import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// App
import App from './App';

// Store
import createStore from '@store/index';

// Styles
import '@fortawesome/fontawesome-pro/css/all.min.css';

// Utils
import * as serviceWorker from '@utils/serviceWorker';

const client: ApolloClient<InMemoryCache> = new ApolloClient({
  cache: new InMemoryCache(),
  credentials: 'same-origin',
  uri: 'http://api.fleetly.it/graphql'
});

const store = createStore();

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
