import { useQuery } from '@apollo/client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';

// Fleetly
import { ChatStatus } from '@fleetly/chat/interfaces';
import { IPagination } from '@fleetly/common/dist/interfaces';

// GraphQL
import GET_CHAT_LIST from './graphql/getChatList.gql';
import SUB_CHAT_UPDATED from './graphql/subChatUpdated.gql';

// Hooks
import { useChatRefetch } from '@chat/hooks/chatRefetch';

// Interfaces
import { IChat } from '@chat/interfaces/chat.interface';

export const useChatThreads = () => {
  // Setup
  const { limit } = useChatRefetch();
  const { companyId } = useParams<{ companyId: string }>();
  const id = `${companyId}-chat-list`;

  // State
  const [status, setStatus] = useState<ChatStatus>(ChatStatus.OPENED);

  // Data
  const { data, fetchMore, loading, subscribeToMore, variables } = useQuery<{
    chats: IPagination<IChat>;
  }>(GET_CHAT_LIST, {
    variables: { companyId, pagination: { first: limit }, status }
  });

  // Effects
  useEffect(() => {
    subscribeToMore({
      document: SUB_CHAT_UPDATED,
      variables: { companyId, status },
      updateQuery: (prevResult, { subscriptionData }) => {
        const updatedChat = (subscriptionData.data as any).chatUpdated as IChat;

        const isExists = !!prevResult.chats.items.find(
          (item) => item.id === updatedChat.id
        );

        return isExists
          ? prevResult
          : {
              chats: {
                ...prevResult.chats,
                items: [updatedChat, ...prevResult.chats.items]
              }
            };
      }
    });
  }, [companyId, status, subscribeToMore]);

  // Handlers
  const handleFetchMore = useCallback(() => {
    fetchMore({
      variables: {
        companyId,
        pagination: {
          after: data?.chats.pageInfo.endCursor,
          first: 20
        }
      },
      updateQuery: (prevResult, { fetchMoreResult }) =>
        ({
          chats: {
            ...fetchMoreResult?.chats,
            items: [...prevResult.chats.items, ...fetchMoreResult!.chats.items]
          }
        } as any)
    });
  }, [companyId, data, fetchMore]);

  const handleStatusClick = useCallback(
    (event: React.SyntheticEvent<HTMLButtonElement>) =>
      setStatus(event.currentTarget.dataset.status as ChatStatus),
    []
  );

  // Memory
  const chats = useMemo(
    () =>
      variables?.status === status && loading
        ? []
        : (data?.chats.items || [])
            .slice()
            .sort((a, b) =>
              a.lastMessage.date < b.lastMessage.date
                ? 1
                : a.lastMessage.date > b.lastMessage.date
                ? -1
                : 0
            ),
    [data, loading, status, variables]
  );

  return {
    chats,
    count: data?.chats.items.length || 0,
    handleFetchMore,
    handleStatusClick,
    hasMore: data?.chats.pageInfo.hasNextPage || false,
    id,
    loading,
    status
  };
};
