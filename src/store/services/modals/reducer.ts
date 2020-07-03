import { get } from 'lodash';

import { IAction } from './actions';

import { CLOSE_MODAL, CLOSE_MODALS, OPEN_MODAL } from './types';

export interface IModalState {
  id?: string;
  isOpened?: boolean;
}

const initialState: IModalState = {};

export default (
  state: IModalState = initialState,
  action: IAction
): IModalState => {
  const id = get(action, 'id', '');

  switch (action.type) {
    case CLOSE_MODAL:
      return { ...state, [id]: action.payload || false };
    case CLOSE_MODALS:
      return initialState;
    case OPEN_MODAL:
      return { ...state, [id]: action.payload || true };
    default:
      return state;
  }
};
