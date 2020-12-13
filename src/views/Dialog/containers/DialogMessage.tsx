import classNames from 'classnames';
import * as React from 'react';

// Components
import Avatar from '@components/Avatar';

// Styles
import styles from './DialogMessage.scss';

// Utils
import { getClassName } from '@utils/styles';

const DialogMessage: React.FC<Dialog.DialogMessageProps> = ({
  firstname,
  lastname,
  date,
  text,
  status
}) => (
  <div
    className={classNames(
      styles.Root,
      getClassName('status', { collection: styles, value: status })
    )}
  >
    <Avatar classes={{ root: styles.Avatar }} />
    <div className={styles.MessageTitle}>
      <div className={styles.UserName}>
        {firstname} {lastname}
      </div>
      <div className={styles.MessageBlock}>
        <div className={styles.Message}>{text}</div>
        <div className={styles.Date}>
          {date}
          {!status ? (
            <div />
          ) : status === 'sent' ? (
            <i className={classNames(styles.Check, 'far fa-check')} />
          ) : (
            <i className={classNames(styles.Check, 'far fa-check-double')} />
          )}
        </div>
      </div>
    </div>
  </div>
);

export default DialogMessage;
