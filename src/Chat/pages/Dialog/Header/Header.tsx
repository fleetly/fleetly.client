import { useMutation } from '@apollo/client';
import classNames from 'classnames';
import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router';

// Components
import Avatar from '@components/Avatar';
import Button from '@components/Button';
import { Text } from '@components/Typography';

// Constants
import { SUBSCRIBER_MODAL } from '@constants';

// Containers
import { DialogHeaderSearch } from './containers/Search';

// GraphQL
import CLOSE_CHAT from './graphql/closeChat.gql';

// Hooks
import { useChatRefetch } from '@chat/hooks/chatRefetch';

// Interfaces
import { IChat } from '@chat/interfaces/chat.interface';

// Store
import { useModals } from '@store';

// Styles
import styles from './Header.scss';

export interface DialogHeaderProps {
  onSearch(search: string): void;
}

export const DialogHeader: React.FC<DialogHeaderProps & IChat> = ({
  id,
  onSearch,
  subscriber: {
    source: { firstname, lastname, photo, type }
  }
}) => {
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
  const handleCancelClick = useCallback(() => {
    onSearch('');
    setOpenState(false);
  }, [onSearch]);

  const handleCloseClick = useCallback(() => closeChat(), [closeChat]);

  const handleSubscriberClick = useCallback(
    () => openModal({ data: { subscriberId: chatId } }),
    [chatId, openModal]
  );

  const handleSearchSubmit = useCallback(({ search }) => onSearch(search), [
    onSearch
  ]);

  const handleOpenClick = useCallback(() => setOpenState(true), []);

  return (
    <div
      className={classNames(styles.Root, { [styles.RootIsOpened]: isOpened })}
    >
      <div className={styles.Header}>
        <div
          className={styles.Subscriber}
          onClick={handleSubscriberClick}
          role="button"
          tabIndex={0}
        >
          <Avatar alt={firstname} sourceType={type} src={photo} toColor={id} />

          <Text className={styles.Name} weight="semiBold">
            {firstname} {lastname}
          </Text>
        </div>

        <div className={styles.Actions}>
          <Button
            className={styles.Search}
            icon="far fa-search"
            onClick={handleOpenClick}
            variant="outlined"
          />

          <Button color="blue" loaded={loading} onClick={handleCloseClick}>
            Confirm
          </Button>
        </div>
      </div>

      <div className={styles.Form}>
        <DialogHeaderSearch
          onCancel={handleCancelClick}
          onSubmit={handleSearchSubmit}
        />
      </div>
    </div>
  );
};
