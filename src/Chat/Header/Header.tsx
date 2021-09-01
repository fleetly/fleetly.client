import classNames from 'classnames';
import React from 'react';

// Fleetly
import { ChatStatus } from '@fleetly/chat/interfaces';

// Components
import Avatar from '@components/Avatar';
import Button from '@components/Button';

// Containers
import { ChatHeaderSearch } from './containers/Search';

// Hooks
import { useChatHeader } from './Header.hooks';

// Interfaces
import { IChat } from '@interfaces/chat.interface';

// Styles
import styles from './Header.scss';

export interface ChatHeaderProps {
  onSearch(search: string): void;
}

const ChatHeader: React.FC<ChatHeaderProps & IChat> = ({
  id,
  onSearch,
  status,
  subscriber: {
    source: { firstname, lastname, photo, type }
  }
}) => {
  const {
    handleCancelClick,
    handleConfirmClick,
    handleSearchClick,
    handleSearchSubmit,
    handleSubscriberClick,
    isOpened,
    loading
  } = useChatHeader({ chatId: id, onSearch });

  return (
    <div
      className={classNames(styles.Root, { [styles.RootIsOpened]: isOpened })}
    >
      <div className={styles.Header}>
        <div className={styles.Subscriber}>
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
        </div>

        <div className={styles.Actions}>
          <Button
            icon="far fa-search"
            onClick={handleSearchClick}
            variant="outlined"
          />

          {status === ChatStatus.OPENED && (
            <Button
              className={styles.Confirm}
              color="blue"
              loaded={loading}
              onClick={handleConfirmClick}
            >
              Confirm
            </Button>
          )}
        </div>
      </div>

      <div className={styles.Search}>
        <ChatHeaderSearch
          onCancel={handleCancelClick}
          onSubmit={handleSearchSubmit}
        />
      </div>
    </div>
  );
};

export default ChatHeader;
