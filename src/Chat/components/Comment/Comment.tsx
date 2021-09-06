import React from 'react';

// Components
import Avatar from '@components/Avatar';
import { Text } from '@components/Typography';

// Interfaces
import { IMessageAuthor } from '@chat/interfaces/message.interface';

// Styles
import styles from './Comment.scss';

export interface CommentProps {
  author: IMessageAuthor;
  date: string;
  text: string;
}

export const Comment: React.FC<CommentProps> = ({ author, date, text }) => {
  // Setup
  const { firstname, id, lastname } = author;

  return (
    <div className={styles.Root}>
      <div className={styles.Header}>
        <Text size="small" weight="bold">
          Comment
        </Text>

        <div className={styles.Author}>
          <Text className={styles.Date} size="small">
            {date}
          </Text>

          <Text className={styles.Name} weight="semiBold">
            {firstname} {lastname}
          </Text>

          <Avatar alt={firstname} className={styles.Avatar} toColor={id} />
        </div>
      </div>

      <Text className={styles.Text} component="div">
        {text}
      </Text>
    </div>
  );
};
