import * as React from 'react';

// Components
import Avatar from '@components/Avatar';

// Styles
import styles from './Item.scss';

const Item: React.FC<Chat.Threads.ItemProps> = ({
  counter,
  lastMessage,
  subscriber
}) => (
  <div className={styles.Root}>
    <Avatar
      classes={{ photo: styles.Avatar }}
      src={subscriber.source?.photo}
      sourceType={subscriber.source.type}
    />

    <div className={styles.Info}>
      <div className={styles.Row}>
        <div className={styles.Name}>
          {subscriber.source?.firstname} {subscriber.source?.lastname}
        </div>

        <div className={styles.Date}>15:35</div>
      </div>

      <div className={styles.Row}>
        <div className={styles.Message}>{lastMessage}</div>
        {counter && <div className={styles.Counter}>{counter}</div>}
      </div>
    </div>
  </div>
);

export default Item;
