import { CLOSE_MODAL, CLOSE_MODALS, OPEN_MODAL } from './types';

export interface IAction {
  type: typeof CLOSE_MODAL | typeof CLOSE_MODALS | typeof OPEN_MODAL;
  id?: string;
}

export const closeModal = (id: string): IAction => ({ type: CLOSE_MODAL, id });

export const closeModals = (): IAction => ({ type: CLOSE_MODALS });

export const openModal = (id: string): IAction => ({ type: OPEN_MODAL, id });
