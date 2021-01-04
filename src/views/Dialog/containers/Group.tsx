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
  isIncoming,
  messages
}) => (
  <div
    className={classNames(styles.Root, {
      [styles.RootVariantIncoming]: !isIncoming
    })}
  >
    <Avatar src={author?.photo} classes={{ root: styles.Avatar }} />
    <div className={styles.Messages}>
      <div className={styles.Author}>
        <div>
          {author?.firstname} {author?.lastname}
        </div>
      </div>
      <div className={styles.MessagesBlock}>
        {messages?.map(({ ...message }) => (
          <Message key={message.id} {...message} isIncoming={isIncoming} />
        ))}
      </div>
    </div>
  </div>
);

export default DialogGroup;
