import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

// Actions
import { closeModal, closeModals, openModal } from './actions';

const useModals = <T = {}>(currentModalId?: string) => {
  // Setup
  const dispatch = useDispatch();

  // Data
  const modal: Modal.Options<T> = useSelector(
    React.useMemo(
      () =>
        createSelector(
          (state: any) => state?.modals,
          (modals) => currentModalId && modals[currentModalId]
        ),
      [currentModalId]
    )
  );

  // Handlers
  const handleCloseModal = React.useCallback<(modalId?: string) => void>(
    (modalId = currentModalId) => dispatch(closeModal(modalId)),
    [currentModalId, dispatch]
  );

  const handleCloseModals = React.useCallback(() => dispatch(closeModals()), [
    dispatch
  ]);

  const handleOpenModal = React.useCallback(
    (idOrData = currentModalId, data?: any) => {
      dispatch(
        openModal(typeof idOrData === 'string' ? idOrData : currentModalId, {
          data:
            data || typeof idOrData === 'object' ? (idOrData as any) : undefined
        })
      );
    },
    [currentModalId, dispatch]
  );

  return {
    data: modal?.data,
    closeModal: handleCloseModal,
    closeModals: handleCloseModals,
    isOpened: !!modal,
    modal,
    openModal: handleOpenModal
  };
};

export { useModals };
