import last from 'lodash/last';
import moment from 'moment';
import React, { useMemo } from 'react';

// Components
import { Text } from '@components/Typography';

import { Comment } from '../Comment';
import { Group, GroupProps } from '../Group';

// Interfaces
import { IMessage } from '@chat/interfaces/message.interface';

// Styles
import styles from './Date.scss';

export interface DateProps {
  date: string;
  messages: IMessage[];
}

export const Date: React.FC<DateProps> = ({ date, messages }) => {
  // Memo
  const displayedTitle = useMemo(() => moment(date).format('dddd, D MMMM'), [
    date
  ]);

  const groupedMessages = useMemo(() => {
    const result: GroupProps[] = [];

    messages
      .sort((a, b) => (a.date > b.date ? 1 : a.date < b.date ? -1 : 0))
      .forEach((message) => {
        const lastGroup = last(result);
        const newMessage = {
          id: message.id,
          date: moment(message.date).format('HH:mm'),
          status: message.status,
          sticker: message.sticker,
          text: message.text
        };

        lastGroup &&
        !lastGroup.isComment &&
        !message.isComment &&
        lastGroup.author.id === message.author.id
          ? lastGroup.messages.push(newMessage)
          : result.push({
              author: message.author,
              isComment: message.isComment,
              isOutcoming: message.isOutcoming,
              messages: [newMessage]
            });
      });

    return result;
  }, [messages]);

  return (
    <div className={styles.Root}>
      <Text
        className={styles.Title}
        component="div"
        size="small"
        weight="semiBold"
      >
        {displayedTitle}
      </Text>

      <div className={styles.Container}>
        {groupedMessages.map(({ isComment, ...group }, index: number) =>
          isComment ? (
            <Comment {...group} {...group.messages[0]} key={index} />
          ) : (
            <Group {...group} key={index} />
          )
        )}
      </div>
    </div>
  );
};
