import moment from 'moment';
import * as React from 'react';
import { useQuery } from 'react-apollo';
import InfiniteScroll from 'react-infinite-scroll-component';

// Components
import Loader from '@components/Loader';
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

  // State
  const [page, setPage] = React.useState(0);

  // Data
  const { data, fetchMore } = useQuery<{ messages: IMessage[] }>(
    GET_MESSAGE_LIST,
    {
      variables: { chatId, pagination: { limit: 10, offset: 0 } }
    }
  );

  // Memo
  const groupedMessages = React.useMemo(() => {
    const datesMap = new Map<string, IMessage[]>();

    (data?.messages || []).forEach((message) => {
      const key = moment(message.date).format('MM/DD/YYYY');

      datesMap.set(
        key,
        datesMap.has(key) ? [...(datesMap.get(key) || []), message] : [message]
      );
    });

    return Array.from(datesMap)
      .map(([date, messages]) => ({
        date,
        messages
      }))
      .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  }, [data]);

  // Handlers
  const handleFetchMore = () => {
    const newPage = page + 1;

    fetchMore({
      variables: { chatId, pagination: { limit: 10, offset: newPage * 10 } },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        setPage(newPage);

        return {
          messages: [
            ...prevResult.messages,
            ...(fetchMoreResult as any).messages
          ]
        };
      }
    });
  };

  return (
    <div className={styles.Root} id="test123" ref={$root}>
      <InfiniteScroll
        className={styles.Wrapper}
        dataLength={data?.messages.length || 0}
        hasMore
        inverse
        loader={
          <div className={styles.Loader}>
            <Loader />
          </div>
        }
        // tslint:disable-next-line: no-console
        next={handleFetchMore}
        scrollableTarget="test123"
      >
        {Array.from(groupedMessages).map(({ date, messages }) => (
          <Date key={date} date={date} messages={messages} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default ChatMessages;
