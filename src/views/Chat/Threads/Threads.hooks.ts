import { useCallback, useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-apollo';
import { useParams } from 'react-router';

// Fleetly
import { ChatStatus } from '@fleetly/chat/dist/common/interfaces';
import { IPagination } from '@fleetly/common/dist/interfaces';

// GraphQL
import GET_CHAT_LIST from './graphql/getChatList.gql';
import SUB_CHAT_UPDATED from './graphql/subChatUpdated.gql';

// Interfaces
import { IChat } from '@interfaces/chat.interface';

const useChatThreadsView = () => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();
  const limit = 20;

  // State
  const [status, setStatus] = useState(ChatStatus.OPENED);

  // Data
  const { data, loading, subscribeToMore } = useQuery<{
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
    // tslint:disable-next-line: no-console
    console.log(123);
  }, []);

  const handleStatusClick = useCallback(
    () =>
      setStatus((status) =>
        status === ChatStatus.OPENED ? ChatStatus.CLOSED : ChatStatus.OPENED
      ),
    []
  );

  // Memo
  const items = useMemo(
    () =>
      (data?.chats.items || [])
        .slice()
        .sort((a, b) =>
          a.lastMessage.date < b.lastMessage.date
            ? 1
            : a.lastMessage.date > b.lastMessage.date
            ? -1
            : 0
        ),
    [data]
  );

  return {
    count: data?.chats.items.length || 0,
    handleFetchMore,
    handleStatusClick,
    hasMore: data?.chats.pageInfo.hasNextPage || false,
    id: `${companyId}-chat-list`,
    items,
    loading,
    status
  };
};

export { useChatThreadsView };
