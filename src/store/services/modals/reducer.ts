import { omit } from 'lodash';

import { CLOSE_MODAL, CLOSE_MODALS, OPEN_MODAL } from './types';

export interface Action {
  modalId?: string;
  payload?: Store.ModalsPayload;
  type: typeof CLOSE_MODAL | typeof CLOSE_MODALS | typeof OPEN_MODAL;
}

const initialState: Store.ModalsState = {};

export default (state = initialState, action: Action): Store.ModalsState => {
  const modalId = action?.modalId;

  switch (action.type) {
    case CLOSE_MODAL:
      return modalId ? omit(state, modalId) : state;
    case CLOSE_MODALS:
      return initialState;
    case OPEN_MODAL:
      return modalId ? { ...state, [modalId]: action.payload || true } : state;
    default:
      return state;
  }
};
