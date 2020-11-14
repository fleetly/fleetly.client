import { CLOSE_MODAL, CLOSE_MODALS, OPEN_MODAL } from './types';

interface IPayload {
  data?: any;
  isOpened?: boolean;
  title?: string;
}
export interface IAction {
  type: typeof CLOSE_MODAL | typeof CLOSE_MODALS | typeof OPEN_MODAL;
  id?: string | symbol;
  payload?: IPayload;
}

export const closeModal = (id?: string | symbol): IAction => ({
  type: CLOSE_MODAL,
  id
});

export const closeModals = (): IAction => ({ type: CLOSE_MODALS });

export const openModal = (
  id?: string | symbol,
  payload?: IPayload
): IAction => ({
  type: OPEN_MODAL,
  id,
  payload
});
