import moment from 'moment';
import * as React from 'react';

// Containers
import Group from './Group';

// Styles
import styles from './Date.scss';

// Test
import TEST from '../Test.js';

const DialogDate: React.FC<Dialog.MessageProps> = ({ date }) => (
  <div className={styles.Root}>
    <div className={styles.Title}>{moment(date).format('Do MMMM')}</div>
    <div className={styles.Messages}>
      {TEST.map((item: any, index: number) => (
        <Group {...item} key={index} />
      ))}
    </div>
  </div>
);

export default DialogDate;
