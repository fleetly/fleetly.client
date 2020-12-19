import classNames from 'classnames';
import moment from 'moment';
import * as React from 'react';

// Styles
import styles from './Message.scss';

const DialogMessage: React.FC<Dialog.DialogMessageProps> = ({
  date,
  status,
  text
}) => (
  <div
    className={classNames(styles.Root, {
      [styles.RootVariantOutcoming]: status
    })}
  >
    <div className={styles.Text}>{text}</div>
    <div className={styles.Date}>
      {moment(date).format('HH:mm')}
      {!!status && (
        <i
          className={classNames(
            styles.Status,
            'far',
            {
              'fa-check': status === 'sent',
              'fa-check-double': status !== 'sent'
            },
            {
              [styles.StatusIsRead]: status === 'read'
            }
          )}
        />
      )}
    </div>
  </div>
);

export default DialogMessage;
