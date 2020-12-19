import classNames from 'classnames';
import * as React from 'react';

// Containers
import Message from './Message';

// Components
import Avatar from '@components/Avatar';

// Styles
import styles from './Group.scss';

const DialogGroup: React.FC<Dialog.DialogGroupProps> = ({
  author,
  posts,
  variant
}) => (
  <div
    className={classNames(styles.Root, {
      [styles.RootVariantOutcoming]: variant
    })}
  >
    <Avatar classes={{ root: styles.Avatar }} />
    <div className={styles.MessageGroup}>
      <div className={styles.Author}>
        {author.user
          ? author?.user?.firstname + ' ' + author?.user?.lastname
          : author?.subscriber?.firstname + ' ' + author?.subscriber?.lastname}
      </div>
      <div className={styles.Messages}>
        {posts.map(({ ...message }) => (
          <Message key={message.id} {...message} />
        ))}
      </div>
    </div>
  </div>
);

export default DialogGroup;
