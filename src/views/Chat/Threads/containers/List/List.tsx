import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

// Components
import Empty from '@components/Empty';
import Loader from '@components/Loader';

import Thread from '../../components/Item';

// Hooks
import { useChatThreadsListView } from './List.hooks';

// Styles
import styles from './List.scss';

const ChatThreadsList: React.FC<any> = ({ status }) => {
  const { count, handleFetchMore, hasMore, id, items } = useChatThreadsListView(
    status
  );

  return (
    <div className={styles.Root} id={id}>
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
  );
};

export default ChatThreadsList;
