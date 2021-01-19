import { last } from 'lodash';
import moment from 'moment';
import * as React from 'react';

// Components
import Group from './Group';

// Styles
import styles from './Date.scss';

const ChatMessagesDate: React.FC<Chat.Messages.Date> = ({ date, messages }) => {
  // Memo
  const displayedTitle = React.useMemo(
    () => moment(date).format('dddd, D MMMM'),
    [date]
  );

  const groupedMessages = React.useMemo(() => {
    const result: Chat.Messages.Group[] = [];

    messages
      .sort((a: any, b: any) =>
        a.date > b.date ? 1 : a.date < b.date ? -1 : 0
      )
      .forEach((message: any) => {
        const lastGroup = last(result);
        const newMessage = {
          id: message.id,
          date: message.date,
          status: message.status,
          text: message.text
        };

        lastGroup && lastGroup.author.id === message.author.id
          ? lastGroup.messages.push(newMessage)
          : result.push({
              author: message.author,
              messages: [newMessage]
            });
      });

    return result;
  }, [messages]);

  return (
    <div className={styles.Root}>
      <div className={styles.Title}>{displayedTitle}</div>

      <div className={styles.Container}>
        {groupedMessages.map((group, index: number) => (
          <Group {...group} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ChatMessagesDate;
