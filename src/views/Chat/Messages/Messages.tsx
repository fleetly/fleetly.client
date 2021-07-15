import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

// Components
import Loader from '@components/Loader';
import Date from './components/Date';

// Hooks
import { useChatMessagesView } from './Messages.hooks';

// Styles
import styles from './Messages.scss';

const ChatMessages: React.FC<Chat.Messages.Root> = ({ chatId }) => {
  const { count, handleFetchMore, hasMore, id, items } = useChatMessagesView(
    chatId
  );

  return (
    <div className={styles.Root} id={id}>
      <InfiniteScroll
        className={styles.Wrapper}
        dataLength={count}
        hasMore={hasMore}
        inverse
        loader={
          <div className={styles.Loader}>
            <Loader />
          </div>
        }
        next={handleFetchMore}
        scrollableTarget={id}
      >
        {items.map(([date, messages]) => (
          <Date key={date} date={date} messages={messages} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default ChatMessages;
