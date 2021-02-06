import classNames from 'classnames';
import moment from 'moment';
import * as React from 'react';

// Fleetly
import { MessageStatus } from '@fleetly/chat/dist/common/interfaces';

// Styles
import styles from './Text.scss';

const ChatMessagesText: React.FC<Chat.Messages.Text> = ({
  date,
  isOutcoming = true,
  status,
  text
}) => {
  // Memo
  const displayedDate = React.useMemo(() => moment(date).format('HH:mm'), [
    date
  ]);

  return (
    <div
      className={classNames(styles.Root, {
        [styles.RootIsOutcoming]: isOutcoming
      })}
    >
      <div className={styles.Text}>{text}</div>

      <div className={styles.Date}>
        {displayedDate}

        {isOutcoming && !!status && (
          <i
            className={classNames(
              styles.Status,
              'far',
              `fa-check${status !== MessageStatus.SENT ? '-double' : ''}`,
              status === MessageStatus.READ && styles.StatusIsRead
            )}
          />
        )}
      </div>
    </div>
  );
};

export default ChatMessagesText;
