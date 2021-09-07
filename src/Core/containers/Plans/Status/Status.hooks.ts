// Store
import { useModals } from '@store';

export const usePlansStatus = () => {
  const canceledModal = useModals('SUBSCRIPTION_CANCELED');
  const succeededModal = useModals('SUBSCRIPTION_SUCCEEDED');

  return {
    canceledModal,
    succeededModal
  };
};
