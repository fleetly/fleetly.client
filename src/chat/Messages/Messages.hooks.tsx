import moment from 'moment';
import { useCallback, useContext, useEffect, useMemo } from 'react';
import { useQuery } from '@apollo/client';

// Fleetly
import { IPagination } from '@fleetly/common/dist/interfaces';

// Context
import { ChatContext } from '../Chat.context';

// GraphQL
import GET_MESSAGE_LIST from './graphql/getMessageList.gql';
import SUB_MESSAGE_SENT from './graphql/subMessageSent.gql';
import SUB_MESSAGE_UPDATED from './graphql/subMessageUpdated.gql';

// Interfaces
import { IMessage } from '@interfaces/message.interface';

const MESSAGES_LIMIT = 100;

const useChatMessagesView = () => {
  // Setup
  const { chatId, search } = useContext(ChatContext);

  // Data
  const { data, fetchMore, loading, subscribeToMore, variables } = useQuery<{
    messages: IPagination<IMessage>;
  }>(GET_MESSAGE_LIST, {
    variables: { chatId, pagination: { first: MESSAGES_LIMIT }, search }
  });

  // Effects
  useEffect(() => {
    subscribeToMore({
      document: SUB_MESSAGE_SENT,
      variables: { chatId },
      updateQuery: (prevResult, { subscriptionData }) => ({
        messages: {
          ...prevResult.messages,
          items: [
            (subscriptionData?.data as any).messageSent as IMessage,
            ...prevResult.messages.items
          ]
        }
      })
    });

    subscribeToMore({
      document: SUB_MESSAGE_UPDATED,
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
          first: MESSAGES_LIMIT
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
    if (variables?.search === search && !loading) {
      const map = new Map<string, IMessage[]>();

      (data?.messages.items || []).forEach((message: IMessage) => {
        const key = moment(message.date).format('MM/DD/YYYY');

        map.set(
          key,
          map.has(key) ? [...(map.get(key) || []), message] : [message]
        );
      });

      return Array.from(map);
    } else {
      return [];
    }
  }, [data, loading, search, variables]);

  return {
    count: items.length || 0,
    handleFetchMore,
    hasMore: data?.messages.pageInfo.hasNextPage || false,
    id: `${chatId}-message-list`,
    items,
    loading: items.length === 0 && loading
  };
};

export { useChatMessagesView };
