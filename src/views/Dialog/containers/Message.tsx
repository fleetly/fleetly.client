import classNames from 'classnames';
import moment from 'moment';
import * as React from 'react';

// Styles
import styles from './Message.scss';

const DialogMessage: React.FC<Dialog.MessageProps> = ({
  date,
  isIncoming,
  status,
  text
}) => (
  <div className={classNames(styles.Root, isIncoming && styles.RootIsIncoming)}>
    <div className={styles.Text}>{text}</div>
    <div className={styles.Date}>
      {moment(date).format('HH:mm')}
      {!!status && (
        <i
          className={classNames(
            styles.Status,
            'far',
            `fa-check${status !== 'sent' ? '-double' : ''}`,
            status === 'read' && styles.StatusIsRead
          )}
        />
      )}
    </div>
  </div>
);

export default DialogMessage;
