import classNames from 'classnames';
import * as React from 'react';

// Containers
import Message from './DialogMessage';

// Components
import Avatar from '@components/Avatar';

// Styles
import styles from './Group.scss';

const DialogGroup: React.FC<Dialog.DialogGroupProps> = ({
  posts,
  user,
  subscriber,
  variant
}) => (
  <div
    className={classNames(styles.Root, {
      [styles.RootVariantOutcoming]: variant
    })}
  >
    <Avatar classes={{ root: styles.Avatar }} />
    <div className={styles.MessageBlock}>
      <div className={styles.Author}>
        {user
          ? user.firstname + ' ' + user.lastname
          : subscriber.firstname + ' ' + subscriber.lastname}
      </div>
      <div className={styles.Messages}>
        {posts.map(({ date, status, text }, index: number) => (
          <Message date={date} key={index} text={text} status={status} />
        ))}
      </div>
    </div>
  </div>
);

export default DialogGroup;
