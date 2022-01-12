import { useCallback } from 'react';

// Store
import { useModals } from '@store';

// Types
import { ConfirmData } from './Confirm.types';

export const useConfirm = () => {
  // Setup
  const modal = useModals('CONFIRM');

  // Methods
  const confirm = useCallback(
    async (data: ConfirmData) => {
      await new Promise((resolve, reject) => {
        modal.openModal({
          data: {
            ...data,
            onReject: () => {
              modal.closeModal();
              reject(new Error('Puck you!'));
            },
            onResolve: () => {
              modal.closeModal();
              resolve(true);
            }
          }
        });
      });
    },
    [modal]
  );

  return { ...modal, confirm };
};
