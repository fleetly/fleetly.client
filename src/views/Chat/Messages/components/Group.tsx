import classNames from 'classnames';
import * as React from 'react';

// Components
import Avatar from '@components/Avatar';

import Sticker from './Sticker';
import Text from './Text';

// Styles
import styles from './Group.scss';

const ChatMessagesGroup: React.FC<Chat.Messages.Group> = ({
  author,
  isOutcoming,
  messages
}) => {
  // Data
  const { firstname, id, lastname, photo } = author;

  // Memo
  const rootClassName = React.useMemo(
    () => classNames(styles.Root, { [styles.RootIsOutcoming]: isOutcoming }),
    [isOutcoming]
  );

  return (
    <div className={rootClassName}>
      <Avatar
        alt={firstname}
        classes={{ root: styles.Avatar }}
        src={photo}
        toColor={id}
      />

      <div className={styles.Container}>
        <div className={styles.Author}>
          {firstname} {lastname}
        </div>

        <div className={styles.List}>
          {messages.map((message) => {
            const Component = message.sticker ? Sticker : Text;

            return (
              <Component
                {...message}
                key={message.id}
                isOutcoming={isOutcoming}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatMessagesGroup;
