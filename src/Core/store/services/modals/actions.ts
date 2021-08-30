import { CLOSE_MODAL, CLOSE_MODALS, OPEN_MODAL } from './types';

export const closeModal = (modalId?: string | symbol) => ({
  type: CLOSE_MODAL,
  modalId
});

export const closeModals = () => ({ type: CLOSE_MODALS });

export const openModal = (
  modalId?: string | symbol,
  payload?: Store.ModalsPayload
) => ({
  type: OPEN_MODAL,
  modalId,
  payload
});
