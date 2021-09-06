import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

// Fleetly
import { ChatStatus } from '@fleetly/chat/interfaces';

// Components
import Button from '@components/Button';
import Loader from '@components/Loader';
import { ThreadsItem } from './components/Item';

// Hooks
import { useChatThreads } from './Threads.hooks';

// Styles
import styles from './Threads.scss';

export const Threads: React.FC = () => {
  // Setup
  const {
    chats,
    count,
    handleFetchMore,
    handleStatusClick,
    hasMore,
    id,
    loading,
    status
  } = useChatThreads();

  return (
    <div className={styles.Root}>
      <div className={styles.Filter}>
        <Button
          color={status === ChatStatus.OPENED ? 'blue' : 'gray'}
          data-status={ChatStatus.OPENED}
          disabled={loading}
          onClick={handleStatusClick}
          variant={status === ChatStatus.OPENED ? 'filled' : 'outlined'}
        >
          Opened
        </Button>

        <Button
          color={status === ChatStatus.CLOSED ? 'blue' : 'gray'}
          data-status={ChatStatus.CLOSED}
          disabled={loading}
          onClick={handleStatusClick}
          variant={status === ChatStatus.CLOSED ? 'filled' : 'outlined'}
        >
          Closed
        </Button>
      </div>

      <div className={styles.List} id={id}>
        <InfiniteScroll
          className={styles.Scroll}
          dataLength={count}
          hasMore={hasMore}
          loader={<Loader className={styles.Loader} />}
          next={handleFetchMore}
          scrollableTarget={id}
        >
          {chats.map((chat) => (
            <ThreadsItem {...chat} key={chat.id} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};
