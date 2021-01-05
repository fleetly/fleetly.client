import moment from 'moment';
import * as React from 'react';

// Containers
import Comment from './Comment';
import Group from './Group';

// Styles
import styles from './Date.scss';

// Test
import TEST from '../test/Test';

const DialogDate: React.FC<Dialog.MessageProps> = ({ date }) => (
  <div className={styles.Root}>
    <div className={styles.Title}>{moment(date).format('D MMMM')}</div>
    <div className={styles.Messages}>
      {TEST.map(({ isComment, ...item }) =>
        isComment ? <Comment {...item} /> : <Group {...(item as any)} />
      )}
    </div>
  </div>
);

export default DialogDate;
