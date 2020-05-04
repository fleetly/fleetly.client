import { combineReducers, compose, createStore } from 'redux';

// Reducer
import { reducer as form } from 'redux-form';
import modals from '@services/modals';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const reducer = combineReducers({
  form,
  modals
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => createStore(reducer, composeEnhancers());
