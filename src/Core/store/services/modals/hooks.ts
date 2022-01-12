import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

// Actions
import { closeModal, closeModals, openModal } from './actions';

export const useModals = <T = {}>(currentModalId?: string) => {
  // Setup
  const dispatch = useDispatch();

  // Data
  const modal: Modal.Options<T> = useSelector(
    useMemo(
      () =>
        createSelector(
          (state: any) => state?.modals,
          (modals) => (currentModalId ? modals[currentModalId] : modals)
        ),
      [currentModalId]
    )
  );

  // Handlers
  const handleCloseModal = useCallback<(modalId?: string) => void>(
    (modalId = currentModalId) => dispatch(closeModal(modalId)),
    [currentModalId, dispatch]
  );

  const handleCloseModals = useCallback(() => dispatch(closeModals()), [
    dispatch
  ]);

  const handleOpenModal = useCallback(
    (idOrData = currentModalId, data?: any) => {
      dispatch(
        openModal(
          typeof idOrData === 'string' ? idOrData : currentModalId,
          data || typeof idOrData === 'object' ? (idOrData as any) : undefined
        )
      );
    },
    [currentModalId, dispatch]
  );

  // Methods
  const confirm = useCallback(
    async (data: { description?: string; title: string }) => {
      dispatch(openModal('CONFIRM', { data }));
    },
    [dispatch]
  );

  return {
    data: modal?.data,
    closeModal: handleCloseModal,
    closeModals: handleCloseModals,
    confirm,
    id: currentModalId,
    isOpened: !!modal,
    modal,
    openModal: handleOpenModal
  };
};
