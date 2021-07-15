import React from 'react';

// Components
import Avatar from '@components/Avatar';
import { Caption, Text } from '@components/Typography';

// Styles
import styles from './Comment.scss';

const ChatMessagesComment: React.FC<Chat.Messages.Comment> = ({
  author,
  date,
  text
}) => {
  // Setup
  const { firstname, id, lastname } = author;

  return (
    <div className={styles.Root}>
      <div className={styles.Header}>
        <Text className={styles.Title}>Comment</Text>

        <div className={styles.Author}>
          <Caption className={styles.Date}>{date}</Caption>

          <div className={styles.Name}>
            {firstname} {lastname}
          </div>

          <Avatar
            alt={firstname}
            classes={{ root: styles.Avatar }}
            toColor={id}
          />
        </div>
      </div>

      <Text className={styles.Text} component="div">
        {text}
      </Text>
    </div>
  );
};

export default ChatMessagesComment;
