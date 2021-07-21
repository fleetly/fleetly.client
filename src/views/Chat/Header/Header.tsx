import React, { useCallback } from 'react';
import { useMutation } from 'react-apollo';

// Fleetly
import { ChatStatus } from '@fleetly/chat/interfaces';

// Components
import Avatar from '@components/Avatar';
import Button from '@components/Button';

// Constants
import { SUBSCRIBER_MODAL } from '@constants';

// GraphQL
import CLOSE_CHAT from './graphql/closeChat.gql';

// Interfaces
import { IChat } from '@interfaces/chat.interface';

// Store
import { useModals } from '@store';

// Styles
import styles from './Header.scss';

const ChatHeader: React.FC<IChat> = ({
  id,
  status,
  subscriber: {
    source: { firstname, lastname, photo, type }
  }
}) => {
  // Setup
  const { openModal } = useModals(SUBSCRIBER_MODAL);

  // Mutations
  const [closeChat, { loading }] = useMutation(CLOSE_CHAT, {
    variables: { chatId: id }
  });

  // Handlers
  const handleConfirmClick = useCallback(() => closeChat(), [closeChat]);

  const handleSubscriberClick = useCallback(
    () => openModal({ subscriberId: id }),
    [id, openModal]
  );

  return (
    <div className={styles.Root}>
      <div className={styles.Subscriber}>
        <div
          className={styles.Info}
          onClick={handleSubscriberClick}
          role="button"
          tabIndex={0}
        >
          <Avatar alt={firstname} sourceType={type} src={photo} toColor={id} />

          <div className={styles.Name}>
            {firstname} {lastname}
          </div>
        </div>
      </div>

      <div className={styles.Actions}>
        {status === ChatStatus.OPENED && (
          <Button
            className={styles.Confirm}
            color="primary"
            loaded={loading}
            onClick={handleConfirmClick}
          >
            Confirm
          </Button>
        )}
      </div>
    </div>
  );
};

export default ChatHeader;
