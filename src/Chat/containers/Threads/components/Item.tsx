import moment from 'moment';
import React, { useMemo } from 'react';
import { NavLink, useParams } from 'react-router-dom';

// Components
import Avatar from '@components/Avatar';
import { Text } from '@components/Typography';

// Interfaces
import { IChat } from '@chat/interfaces/chat.interface';

// Styles
import styles from './Item.scss';

export const ThreadsItem: React.FC<IChat> = ({
  id,
  lastMessage,
  subscriber: {
    source: { firstname, lastname, photo, type }
  }
}) => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();
  const { author, date, sticker, text } = lastMessage;

  // Memo
  const displayedDate = useMemo(() => {
    if (date) {
      const currentDate = moment(date);

      return currentDate.format(
        currentDate.isSame(moment().startOf('day'), 'd') ? 'HH:mm' : 'DD MMM'
      );
    }

    return null;
  }, [date]);

  return (
    <NavLink
      activeClassName={styles.RootIsSelected}
      className={styles.Root}
      to={`/${companyId}/chat/${id}`}
    >
      <Avatar
        alt={`${firstname} ${lastname}`}
        className={styles.Avatar}
        sourceType={type}
        src={photo}
        toColor={id}
      />

      <div className={styles.Info}>
        <div className={styles.Row}>
          <Text className={styles.Name} weight="semiBold">
            {firstname} {lastname}
          </Text>

          {displayedDate && <Text size="small">{displayedDate}</Text>}
        </div>

        <div className={styles.Row}>
          {lastMessage && (
            <Text className={styles.Text} noWrap>
              <Text className={styles.Author} weight="semiBold">
                {author.isBot ? 'Bot' : author.firstname}:
              </Text>

              {!!sticker ? 'Sticker 😊' : text}
            </Text>
          )}
        </div>
      </div>
    </NavLink>
  );
};
