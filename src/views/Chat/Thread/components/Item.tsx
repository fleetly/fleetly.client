import * as React from 'react';

// Components
import Avatar from '@components/Avatar';

// Styles
import styles from './Item.scss';

const Item: React.FC<Thread.ItemProps> = ({ lastMessage, subscriber }) => (
  <div className={styles.Root}>
    <Avatar
      src={subscriber.source?.photo}
      sourceType={subscriber.source.type}
      classes={{ photo: styles.Avatar }}
    />

    <div className={styles.Info}>
      <div className={styles.Author}>
        <div className={styles.Name}>
          {subscriber.source?.firstname} {subscriber.source?.lastname}
        </div>
        <div className={styles.LastDate}>Yesterday</div>
      </div>

      <div className={styles.LastMessage}>
        <div className={styles.Message}>{lastMessage}</div>
        <div className={styles.Counter}>12</div>
      </div>
    </div>
  </div>
);

export default Item;
