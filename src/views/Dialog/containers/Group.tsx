import classNames from 'classnames';
import * as React from 'react';

// Containers
import Message from './Message';

// Components
import Avatar from '@components/Avatar';

// Styles
import styles from './Group.scss';

const DialogGroup: React.FC<Dialog.GroupProps> = ({
  author,
  children,
  variant
}) => (
  <div
    className={classNames(styles.Root, {
      [styles.RootVariantOutcoming]: variant === 'outcoming'
    })}
  >
    <Avatar classes={{ root: styles.Avatar }} />
    <div className={styles.Messages}>
      <div className={styles.Author}>
        <div>{author}</div>
      </div>
      <div className={styles.MessagesBlock}>
        {children.map(({ ...message }) => (
          <Message key={message.id} {...message} variant={variant} />
        ))}
      </div>
    </div>
  </div>
);

export default DialogGroup;
