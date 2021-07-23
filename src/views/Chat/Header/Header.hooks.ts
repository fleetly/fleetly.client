import { useCallback, useState } from 'react';
import { useMutation } from 'react-apollo';

// Constants
import { SUBSCRIBER_MODAL } from '@constants';

// GraphQL
import CLOSE_CHAT from './graphql/closeChat.gql';

// Hooks
import { useChatRefetch } from '../Chat.hooks';

// Store
import { useModals } from '@store';

const useChatHeader = (props: {
  chatId: string;
  onSearch?(search: string): void;
}) => {
  // Setup
  const { chatId, onSearch } = props;

  const { refetchQueries } = useChatRefetch();
  const { openModal } = useModals(SUBSCRIBER_MODAL);

  // State
  const [isOpened, setOpenState] = useState<boolean>(false);

  // Mutations
  const [closeChat, { loading }] = useMutation(CLOSE_CHAT, {
    refetchQueries,
    variables: { chatId }
  });

  // Handlers
  const handleCancelClick = useCallback(() => {
    onSearch && onSearch('');
    setOpenState(false);
  }, [onSearch]);

  const handleConfirmClick = useCallback(() => closeChat(), [closeChat]);
  const handleSearchClick = useCallback(() => setOpenState(true), []);

  const handleSearchSubmit = useCallback(
    ({ search }) => onSearch && onSearch(search),
    [onSearch]
  );

  const handleSubscriberClick = useCallback(
    () => openModal({ subscriberId: chatId }),
    [chatId, openModal]
  );

  return {
    handleCancelClick,
    handleConfirmClick,
    handleSearchClick,
    handleSearchSubmit,
    handleSubscriberClick,
    isOpened,
    loading
  };
};

export { useChatHeader };
