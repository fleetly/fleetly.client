import { CLOSE_MODAL, CLOSE_MODALS, OPEN_MODAL } from './types';

export const closeModal = (id?: string | symbol) => ({
  type: CLOSE_MODAL,
  id
});

export const closeModals = () => ({ type: CLOSE_MODALS });

export const openModal = (
  id?: string | symbol,
  payload?: Store.ModalsPayload
) => ({
  type: OPEN_MODAL,
  id,
  payload
});
