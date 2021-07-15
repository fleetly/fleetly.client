import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

// Fleetly
import { ChatStatus } from '@fleetly/chat/dist/common/interfaces';

// Components
import Button from '@components/Button';
import Empty from '@components/Empty';
import Loader from '@components/Loader';

import Thread from './components/Item';

// Hooks
import { useChatThreadsView } from './Threads.hooks';

// Styles
import styles from './Threads.scss';

const ChatThreads: React.FC = () => {
  const {
    count,
    handleFetchMore,
    handleStatusClick,
    hasMore,
    id,
    items,
    loading,
    status
  } = useChatThreadsView();

  return (
    <div className={styles.Root}>
      {count === 0 && loading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.Actions}>
            <Button
              className={styles.Action}
              color={status === ChatStatus.OPENED ? 'primary' : 'default'}
              onClick={handleStatusClick}
              variant={status === ChatStatus.OPENED ? 'filled' : 'outlined'}
            >
              Opened
            </Button>

            <Button
              className={styles.Action}
              color={status === ChatStatus.CLOSED ? 'primary' : 'default'}
              onClick={handleStatusClick}
              variant={status === ChatStatus.CLOSED ? 'filled' : 'outlined'}
            >
              Closed
            </Button>
          </div>

          <div className={styles.Container} id={id}>
            <InfiniteScroll
              className={styles.Wrapper}
              dataLength={count}
              hasMore={hasMore}
              loader={
                <div className={styles.Loader}>
                  <Loader />
                </div>
              }
              next={handleFetchMore}
              scrollableTarget={id}
            >
              {count === 0 ? (
                <Empty
                  description="You have closed all opened dialogs."
                  icon="fal fa-check-circle"
                  title="All Close"
                />
              ) : (
                items.map((item) => <Thread key={item.id} {...item} />)
              )}
            </InfiniteScroll>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatThreads;
