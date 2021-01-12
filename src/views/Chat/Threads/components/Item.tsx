import * as React from 'react';
import { NavLink, useParams } from 'react-router-dom';

// Components
import Avatar from '@components/Avatar';

// Routes
import ROUTES from '@routes';

// Styles
import styles from './Item.scss';

// Utils
import { fillUrl } from '@utils/url';

const Item: React.FC<Chat.Threads.ItemProps> = ({
  counter,
  lastMessage,
  subscriber
}) => {
  const { companyId } = useParams<{ companyId: string }>();

  return (
    <NavLink
      activeClassName={styles.RootIsSelected}
      className={styles.Root}
      to={fillUrl(ROUTES.COMPANY.CHAT.DIALOG, {
        companyId,
        subscriberId: subscriber.id
      })}
    >
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
          <div className={styles.Message}>
            <span className={styles.Author}>
              {lastMessage.author.firstname}:
            </span>{' '}
            {lastMessage.message}
          </div>
          {counter && <div className={styles.Badge}>{counter}</div>}
        </div>
      </div>
    </NavLink>
  );
};

export default Item;
