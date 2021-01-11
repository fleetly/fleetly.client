import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Components
import Avatar from '@components/Avatar';

// Styles
import styles from './Item.scss';

const Item: React.FC<Chat.Threads.ItemProps> = ({
  counter,
  lastMessage,
  subscriber
}) => (
  <NavLink className={styles.NavLink} to="/:companyId/chat/:subscriberId">
    <div className={styles.Root}>
      <Avatar
        classes={{ photo: styles.Avatar }}
        src={subscriber.source.photo}
        sourceType={subscriber.source.type}
      />

      <div className={styles.Info}>
        <div className={styles.Row}>
          <div className={styles.Name}>
            {subscriber.source.firstname} {subscriber.source.lastname}
          </div>

          <div className={styles.Date}>15:35</div>
        </div>

        <div className={styles.Row}>
          <div className={styles.Message}>{lastMessage}</div>
          {counter && <div className={styles.Badge}>{counter}</div>}
        </div>
      </div>
    </div>
  </NavLink>
);

export default Item;
