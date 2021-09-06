import { useMemo } from 'react';
import { useParams } from 'react-router';

// Fleetly
import { ChatStatus } from '@fleetly/chat/interfaces';

// GraphQL
import GET_CHAT_LIST from '../containers/Threads/graphql/getChatList.gql';

export const useChatRefetch = () => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();
  const limit = 20;

  // Memo
  const refetchQueries = useMemo(
    () => [
      {
        query: GET_CHAT_LIST,
        variables: {
          companyId,
          pagination: { first: limit },
          status: ChatStatus.CLOSED
        }
      },
      {
        query: GET_CHAT_LIST,
        variables: {
          companyId,
          pagination: { first: limit },
          status: ChatStatus.OPENED
        }
      }
    ],
    [companyId]
  );

  return { companyId, limit, refetchQueries };
};
