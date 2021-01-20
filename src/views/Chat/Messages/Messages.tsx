import moment from 'moment';
import * as React from 'react';
import { useQuery } from 'react-apollo';
import InfiniteScroller from 'react-infinite-scroller';

// Components
import Date from './components/Date';

// GraphQL
import GET_MESSAGE_LIST from './graphql/getMessageList.gql';

// Interfaces
import { IMessage } from '@interfaces/message.interface';

// Styles
import styles from './Messages.scss';

const ChatMessages: React.FC<Chat.Messages.Root> = ({ chatId }) => {
  // Setup
  const $root = React.useRef(null);

  // Data
  const { data } = useQuery<{ messages: IMessage[] }>(GET_MESSAGE_LIST, {
    variables: { chatId }
  });

  // Memo
  const groupedMessages = React.useMemo(() => {
    const dates = new Map<string, IMessage[]>();

    (data?.messages || []).forEach((message) => {
      const key = moment(message.date).format('MM/DD/YYYY');
      dates.set(
        key,
        dates.has(key) ? [...(dates.get(key) || []), message] : [message]
      );
    });

    return dates;
  }, [data]);

  return (
    <div className={styles.Root} ref={$root}>
      <InfiniteScroller
        className={styles.Wrapper}
        hasMore
        // tslint:disable-next-line: no-console
        loadMore={console.log}
        isReverse
        pageStart={0}
      >
        {Array.from(groupedMessages).map(([date, messages]) => (
          <Date key={date} date={date} messages={messages} />
        ))}
      </InfiniteScroller>
    </div>
  );
};

export default ChatMessages;
