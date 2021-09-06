import classNames from 'classnames';
import React from 'react';

// Components
import Avatar from '@components/Avatar';
import { Text } from '@components/Typography';

import { Message, MessageProps } from '../Message';
import { Sticker } from '../Sticker';

// Interfaces
import { IMessageAuthor } from '@chat/interfaces/message.interface';

// Styles
import styles from './Group.scss';

export interface GroupProps {
  author: IMessageAuthor;
  isComment?: boolean;
  isOutcoming?: boolean;
  messages: MessageProps[];
}

export const Group: React.FC<GroupProps> = ({
  author,
  isOutcoming,
  messages
}) => {
  // Data
  const { firstname, id, lastname, photo } = author;

  // Memo
  const rootClassName = React.useMemo(
    () => classNames(styles.Root, { [styles.RootIsOutcoming]: isOutcoming }),
    [isOutcoming]
  );

  return (
    <div className={rootClassName}>
      <Avatar
        alt={firstname}
        className={styles.Avatar}
        src={photo}
        toColor={id}
      />

      <div className={styles.Container}>
        <Text
          className={styles.Author}
          component="div"
          size="small"
          weight="semiBold"
        >
          {firstname} {lastname}
        </Text>

        <div className={styles.List}>
          {messages.map((message) => {
            const Component = message.sticker ? Sticker : Message;

            return (
              <Component
                {...message}
                key={message.id}
                isOutcoming={isOutcoming}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
