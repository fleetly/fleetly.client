import { combineReducers, compose, createStore } from 'redux';
import { reducer as form } from 'redux-form';

// Reducers
import modals from './services/modals';
import notifications from './services/notifications';
import session from './services/session';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const reducer = combineReducers({
  form,
  modals,
  notifications,
  session
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => createStore(reducer, composeEnhancers());

export * from './services/modals';
export * from './services/notifications';
export * from './services/session';
