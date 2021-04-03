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

const Item: React.FC<Chat.Threads.Item> = ({
  counter,
  isConversation,
  lastMessage,
  subscriber
}) => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();
  const { firstname, lastname, photo, type } = subscriber?.source || {};
  const { author, date, sticker, text } = lastMessage;

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
        alt={firstname}
        classes={{ photo: styles.Avatar }}
        sourceType={type}
        src={photo}
        toColor={subscriber.id}
      />

      <div className={styles.Info}>
        <div className={styles.Row}>
          <div className={styles.Name}>
            {firstname} {lastname}
          </div>

          {lastMessage && (
            <div className={styles.Date}>{moment(date).format('HH:mm')}</div>
          )}
        </div>

        <div className={styles.Row}>
          {lastMessage && (
            <div className={styles.Message}>
              <span className={styles.Author}>{author.firstname}:</span>
              {!!sticker ? 'Sticker 😊' : text}
            </div>
          )}

          {counter && <div className={styles.Badge}>{counter}</div>}
        </div>
      </div>
    </NavLink>
  );
};

export default Item;
