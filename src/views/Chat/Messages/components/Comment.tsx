import moment from 'moment';
import * as React from 'react';

// Components
import Avatar from '@components/Avatar';
import { Caption } from '@components/Typography';

// Styles
import styles from './Comment.scss';

const ChatMessagesComment: React.FC<any> = ({ author, date, text }) => {
  // Setup
  const { firstname, id, lastname } = author;

  // Memo
  const displayedDate = React.useMemo(() => moment(date).format('HH:mm'), [
    date
  ]);

  return (
    <div className={styles.Root}>
      <div className={styles.Header}>
        <div className={styles.Title}>Comment</div>

        <div className={styles.Author}>
          <Caption className={styles.Date}>{displayedDate}</Caption>

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

      <div className={styles.Text}>{text}</div>
    </div>
  );
};

export default ChatMessagesComment;
