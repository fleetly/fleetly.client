import classNames from 'classnames';
import moment from 'moment';
import * as React from 'react';

// Styles
import styles from './Message.scss';

const DialogMessage: React.FC<Dialog.MessageProps> = ({
  date,
  status,
  text,
  variant
}) => (
  <div
    className={classNames(styles.Root, {
      [styles.RootVariantComment]: variant === 'comment',
      [styles.RootVariantIncoming]: variant === 'incoming',
      [styles.RootVariantOutcoming]: variant === 'outcoming'
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
