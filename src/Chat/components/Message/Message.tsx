import classNames from 'classnames';
import React from 'react';

// Fleetly
import { MessageStatus } from '@fleetly/chat/interfaces';

// Components
import { Text } from '@components/Typography';

// Interfaces
import { IMessageSticker } from '@chat/interfaces/message.interface';

// Styles
import styles from './Message.scss';

export interface MessageProps {
  id: string;
  date: string;
  isOutcoming?: boolean;
  status: MessageStatus;
  sticker?: IMessageSticker;
  text: string;
}

export const Message: React.FC<MessageProps> = ({
  date,
  isOutcoming = true,
  status,
  text
}) => (
  <div
    className={classNames(styles.Root, {
      [styles.RootIsOutcoming]: isOutcoming
    })}
  >
    <Text className={styles.Text} component="div">
      {text}
    </Text>

    <Text className={styles.Date} component="div" size="small">
      {date}

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
    </Text>
  </div>
);
