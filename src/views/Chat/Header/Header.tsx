import * as React from 'react';
import { useQuery } from 'react-apollo';

// Components
import Avatar from '@components/Avatar';
import Button from '@components/Button';
import Loader from '@components/Loader';

// Constants
import { SUBSCRIBER_MODAL } from '@constants';

// GraphQL
import GET_CHAT_BY_ID from './graphql/getChatById.gql';

// Interfaces
import { IChat } from '@interfaces/chat.interface';

// Store
import { useModals } from '@store';

// Styles
import styles from './Header.scss';

export interface ChatHeaderProps {
  chatId: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ chatId }) => {
  // Setup
  const { openModal } = useModals(SUBSCRIBER_MODAL);

  // Data
  const { data, loading } = useQuery<{ chat: IChat }>(GET_CHAT_BY_ID, {
    variables: { chatId }
  });

  const { id, source } = data?.chat.subscriber || {};
  const { firstname, lastname, photo, type } = source || {};

  // Handlers
  const handleSubscriberClick = React.useCallback(
    () => openModal({ subscriberId: id }),
    [id, openModal]
  );

  return (
    <div className={styles.Root}>
      <div className={styles.Subscriber}>
        {loading && <Loader />}

        {!loading && id && (
          <div
            className={styles.Info}
            onClick={handleSubscriberClick}
            role="button"
            tabIndex={0}
          >
            <Avatar
              alt={firstname}
              sourceType={type}
              src={photo}
              toColor={id}
            />

            <div className={styles.Name}>
              {firstname} {lastname}
            </div>
          </div>
        )}
      </div>

      <div className={styles.Actions}>
        <Button className={styles.Confirm} color="primary">
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default ChatHeader;
