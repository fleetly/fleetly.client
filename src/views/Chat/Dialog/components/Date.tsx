import moment from 'moment';
import * as React from 'react';

// Containers
import Comment from './Comment';
import Group from './Group';

// Styles
import styles from './Date.scss';

// Test
import data from '../data';

const DialogDate: React.FC<Chat.Dialog.DateProps> = ({ date }) => (
  <div className={styles.Root}>
    <div className={styles.Title}>{moment(date).format('D MMMM')}</div>

    <div className={styles.Messages}>
      {data.map(({ isComment, ...item }) =>
        isComment ? (
          <Comment {...(item as any)} />
        ) : (
          <Group {...(item as any)} />
        )
      )}
    </div>
  </div>
);

export default DialogDate;
