import classNames from 'classnames';
import * as React from 'react';

// Containers
import Message from './Message';

// Components
import Avatar from '@components/Avatar';

// Styles
import styles from './Group.scss';

const DialogGroup: React.FC<Chat.Dialog.GroupProps> = ({
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
    <div className={styles.Container}>
      <div className={styles.Author}>
        {author.firstname} {author.lastname}
      </div>

      <div className={styles.Messages}>
        {messages?.map(({ ...message }, index: number) => (
          <Message key={index} {...message} isIncoming={isIncoming} />
        ))}
      </div>
    </div>
  </div>
);

export default DialogGroup;
