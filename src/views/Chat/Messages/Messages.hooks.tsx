import moment from 'moment';
import * as React from 'react';
import { useQuery } from 'react-apollo';

// Fleetly
import { IPagination } from '@fleetly/common/dist/interfaces';

// GraphQL
import GET_MESSAGE_LIST from './graphql/getMessageList.gql';

// Interfaces
import { IMessage } from '@interfaces/message.interface';

const useChatMessagesView = (chatId: string) => {
  // Setup
  // @todo - increase to 100
  const limit = 10;

  // Data
  const { data, fetchMore } = useQuery<{ messages: IPagination<IMessage> }>(
    GET_MESSAGE_LIST,
    { variables: { chatId, pagination: { first: limit } } }
  );

  // Handlers
  const handleFetchMore = () => {
    fetchMore({
      variables: {
        chatId,
        pagination: {
          after: data?.messages.pageInfo.endCursor,
          first: limit
        }
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        return {
          messages: {
            ...fetchMoreResult?.messages,
            items: [
              ...prevResult.messages.items,
              ...fetchMoreResult!.messages.items
            ]
          }
        } as any;
      }
    });
  };

  // Memo
  const items = React.useMemo(() => {
    const map = new Map<string, IMessage[]>();

    (data?.messages.items || []).forEach((message: IMessage) => {
      const key = moment(message.date).format('MM/DD/YYYY');

      map.set(
        key,
        map.has(key) ? [...(map.get(key) || []), message] : [message]
      );
    });

    return Array.from(map);
  }, [data]);

  return {
    count: data?.messages.items.length || 0,
    handleFetchMore,
    hasMore: data?.messages.pageInfo.hasNextPage || false,
    id: `${chatId}-message-list`,
    items
  };
};

export { useChatMessagesView };
