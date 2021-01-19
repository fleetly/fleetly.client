import moment from 'moment';
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
  isConversation,
  lastMessage,
  subscriber
}) => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();
  const { firstname, lastname, photo, type } = subscriber?.source || {};

  return (
    <NavLink
      activeClassName={styles.RootIsSelected}
      className={styles.Root}
      to={fillUrl(ROUTES.COMPANY.CHAT.DIALOG, {
        chatId: subscriber.id,
        companyId
      })}
    >
      <Avatar
        classes={{ photo: styles.Avatar }}
        src={photo}
        sourceType={type}
      />

      <div className={styles.Info}>
        <div className={styles.Row}>
          <div className={styles.Name}>
            {firstname} {lastname}
          </div>

          {lastMessage && (
            <div className={styles.Date}>
              {moment(lastMessage.date).format('HH:mm')}
            </div>
          )}
        </div>

        <div className={styles.Row}>
          {lastMessage && (
            <div className={styles.Message}>
              {isConversation && (
                <span className={styles.Author}>
                  {lastMessage?.author.firstname}:
                </span>
              )}

              {lastMessage?.text}
            </div>
          )}

          {counter && <div className={styles.Badge}>{counter}</div>}
        </div>
      </div>
    </NavLink>
  );
};

export default Item;
