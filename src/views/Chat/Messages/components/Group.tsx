import classNames from 'classnames';
import * as React from 'react';

// Components
import Avatar from '@components/Avatar';
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
          {messages.map((message: any) => (
            <Text {...message} isOutcoming={isOutcoming} key={message.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatMessagesGroup;
