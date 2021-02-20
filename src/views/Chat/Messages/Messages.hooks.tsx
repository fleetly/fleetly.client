import moment from 'moment';
import { useCallback, useEffect, useMemo } from 'react';
import { useQuery } from 'react-apollo';

// Fleetly
import { IPagination } from '@fleetly/common/dist/interfaces';

// GraphQL
import GET_MESSAGE_LIST from './graphql/getMessageList.gql';
import SUB_MESSAGE_NEW from './graphql/subMessageNew.gql';
import SUB_MESSAGE_UPDATE from './graphql/subMessageUpdate.gql';

// Interfaces
import { IMessage } from '@interfaces/message.interface';

const useChatMessagesView = (chatId: string) => {
  // Setup
  const limit = 100;

  // Data
  const { data, fetchMore, subscribeToMore } = useQuery<{
    messages: IPagination<IMessage>;
  }>(GET_MESSAGE_LIST, { variables: { chatId, pagination: { first: limit } } });

  // Effects
  useEffect(() => {
    subscribeToMore({
      document: SUB_MESSAGE_NEW,
      variables: { chatId },
      updateQuery: (prevResult, { subscriptionData }) => ({
        messages: {
          ...prevResult.messages,
          items: [
            (subscriptionData?.data as any).messageNew as IMessage,
            ...prevResult.messages.items
          ]
        }
      })
    });

    subscribeToMore({
      document: SUB_MESSAGE_UPDATE,
      variables: { chatId }
    });
  }, [chatId, subscribeToMore]);

  // Handlers
  const handleFetchMore = useCallback(() => {
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
  }, [chatId, data, fetchMore]);

  // Memo
  const items = useMemo(() => {
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
