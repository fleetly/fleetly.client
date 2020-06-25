import { combineReducers, compose, createStore } from 'redux';
import { reducer as form } from 'redux-form';

// Reducers
import modals, { IModalState } from './services/modals';
import session, { ISessionState } from './services/session';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const reducer = combineReducers({
  form,
  modals,
  session
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => createStore(reducer, composeEnhancers());

export interface IState {
  modals: IModalState;
  session: ISessionState;
}

export * from './services/modals';
export * from './services/session';
