import { useQuery } from '@apollo/client';
import moment from 'moment';
import { useCallback, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

// Fleetly
import { IPagination } from '@fleetly/common/dist/interfaces';

// GraphQL
import GET_MESSAGE_LIST from './graphql/getMessageList.gql';
import SUB_MESSAGE_SENT from './graphql/subMessageSent.gql';
import SUB_MESSAGE_UPDATED from './graphql/subMessageUpdated.gql';

// Interfaces
import { IMessage } from '@chat/interfaces/message.interface';

const MESSAGES_LIMIT = 100;

export const useDialogMessages = (search?: string) => {
  // Setup
  const { chatId } = useParams<{ chatId: string }>();
  const id = `${chatId}-message-list`;

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
      variables: { chatId: '123' }
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
  const messages = useMemo(() => {
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
    count: messages.length || 0,
    handleFetchMore,
    hasMore: data?.messages.pageInfo.hasNextPage || false,
    id,
    messages,
    loading: messages.length === 0 && loading
  };
};
