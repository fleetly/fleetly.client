import { CLOSE_MODAL, CLOSE_MODALS, OPEN_MODAL } from './types';

interface IPayload {
  isOpened?: boolean;
}
export interface IAction {
  type: typeof CLOSE_MODAL | typeof CLOSE_MODALS | typeof OPEN_MODAL;
  id?: string;
  payload?: IPayload;
}

export const closeModal = (id: string, payload?: IPayload): IAction => ({
  type: CLOSE_MODAL,
  id,
  payload
});

export const closeModals = (): IAction => ({ type: CLOSE_MODALS });

export const openModal = (id: string, payload?: IPayload): IAction => ({
  type: OPEN_MODAL,
  id,
  payload
});
