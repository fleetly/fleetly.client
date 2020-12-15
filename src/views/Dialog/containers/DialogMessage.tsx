import classNames from 'classnames';
import moment from 'moment';
import * as React from 'react';

// Components
import Avatar from '@components/Avatar';

// Styles
import styles from './DialogMessage.scss';

const DialogMessage: React.FC<Dialog.DialogMessageProps> = ({
  user,
  date,
  text,
  status
}) => (
  <div
    className={classNames(styles.Root, {
      [styles.RootVariantOutcoming]: status
    })}
  >
    <Avatar classes={{ root: styles.Avatar }} />
    <div className={styles.MessageTitle}>
      <div className={styles.UserName}>
        {user.firstname} {user.lastname}
      </div>
      <div className={styles.MessageBlock}>
        <div className={styles.Message}>{text}</div>
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
                  [styles.StatusVariantRead]: status === 'read'
                }
              )}
            />
          )}
        </div>
      </div>
    </div>
  </div>
);

export default DialogMessage;