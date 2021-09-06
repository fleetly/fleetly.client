import { useMutation } from '@apollo/client';
import { useCallback, useState } from 'react';
import { useParams } from 'react-router';

// Constants
import { SUBSCRIBER_MODAL } from '@constants';

// GraphQL
import CLOSE_CHAT from './graphql/closeChat.gql';

// Hooks
import { useChatRefetch } from '../../../hooks/chatRefetch';

// Store
import { useModals } from '@store';

export const useDialogHeader = () => {
  // Setup
  const { refetchQueries } = useChatRefetch();
  const { openModal } = useModals(SUBSCRIBER_MODAL);
  const { chatId } = useParams<{ chatId: string }>();

  // State
  const [isOpened, setOpenState] = useState<boolean>(false);

  // Mutations
  const [closeChat, { loading }] = useMutation(CLOSE_CHAT, {
    refetchQueries,
    variables: { chatId }
  });

  // Handlers
  const handleCloseClick = useCallback(() => closeChat(), [closeChat]);

  const handleSubscriberClick = useCallback(
    () => openModal({ data: { subscriberId: chatId } }),
    [chatId, openModal]
  );

  const handleTriggerClick = useCallback(
    () => setOpenState((state) => !state),
    [setOpenState]
  );

  return {
    chatId,
    handleCloseClick,
    handleSubscriberClick,
    handleTriggerClick,
    isOpened,
    loading
  };
};
