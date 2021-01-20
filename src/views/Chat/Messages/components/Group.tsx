import * as React from 'react';

// Components
import Avatar from '@components/Avatar';
import Text from './Text';

// Styles
import styles from './Group.scss';

const ChatMessagesGroup: React.FC<Chat.Messages.Group> = ({
  author,
  messages
}) => {
  // Data
  const { firstname, lastname, photo } = author;

  return (
    <div className={styles.Root}>
      <Avatar src={photo} classes={{ root: styles.Avatar }} />

      <div className={styles.Container}>
        <div className={styles.Author}>
          {firstname} {lastname}
        </div>

        <div className={styles.List}>
          {messages.map((message: any) => (
            <Text {...message} key={message.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatMessagesGroup;
