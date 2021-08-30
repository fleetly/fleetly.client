import last from 'lodash/last';
import moment from 'moment';
import * as React from 'react';

// Components
import Comment from './Comment';
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
      <div className={styles.Title}>{displayedTitle}</div>

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

export default ChatMessagesDate;
