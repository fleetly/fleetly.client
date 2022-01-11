// Store
import { useModals } from '@store';

export const useFlowsCreate = () => {
  // Setup
  const modal = useModals('CREATE_FLOW');

  return {
    modal
  };
};
