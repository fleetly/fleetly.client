import { useCallback } from 'react';
import { useQuery } from 'react-apollo';
import { useParams } from 'react-router';

// Fleetly
import { ChatStatus } from '@fleetly/chat/dist/common/interfaces';
import { IPagination } from '@fleetly/common/dist/interfaces';

// GraphQL
import GET_CHAT_LIST from '../../graphql/getChatList.gql';

// Interfaces
import { IChat } from '@interfaces/chat.interface';

const useChatThreadsListView = (status: ChatStatus) => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();
  const limit = 20;

  // Data
  const { data } = useQuery<{
    chats: IPagination<IChat>;
  }>(GET_CHAT_LIST, {
    variables: { companyId, pagination: { first: limit }, status }
  });

  // Handlers
  const handleFetchMore = useCallback(() => {
    // tslint:disable-next-line: no-console
    console.log(123);
  }, []);

  return {
    count: data?.chats.items.length || 0,
    handleFetchMore,
    hasMore: data?.chats.pageInfo.hasNextPage || false,
    id: `${companyId}-chat-list`,
    items: data?.chats.items || []
  };
};

export { useChatThreadsListView };
