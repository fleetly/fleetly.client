import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

// Components
import Loader from '@components/Loader';
import { Date } from '@chat/components/Date';

// Hooks
import { useDialogMessages } from './Messages.hooks';

// Styles
import styles from './Messages.scss';

export interface DialogMessagesProps {
  search?: string;
}

export const DialogMessages: React.FC<DialogMessagesProps> = ({ search }) => {
  const {
    count,
    handleFetchMore,
    hasMore,
    id,
    loading,
    messages
  } = useDialogMessages(search);

  return (
    <div className={styles.Root} id={id}>
      {loading ? (
        <Loader />
      ) : (
        <InfiniteScroll
          className={styles.Scroll}
          dataLength={count}
          hasMore={hasMore}
          inverse
          loader={<Loader className={styles.Loader} />}
          next={handleFetchMore}
          scrollableTarget={id}
        >
          {messages.map(([date, messages]) => (
            <Date key={date} date={date} messages={messages} />
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
};
