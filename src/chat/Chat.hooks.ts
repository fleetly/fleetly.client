import { useCallback, useMemo, useState } from 'react';
import { useQuery } from '@apollo/client';
import { matchPath, useLocation, useParams } from 'react-router';

// Fleetly
import { ChatStatus } from '@fleetly/chat/interfaces';

// GraphQL
import GET_CHAT_BY_ID from './Common/graphql/getChatById.gql';
import GET_CHAT_LIST from './Common/graphql/getChatList.gql';

// Interfaces
import { IChat } from '@interfaces/chat.interface';

// Routes
import routes from '@routes';

const useChatView = () => {
  // Setup
  const location = useLocation();

  // State
  const [search, setSearch] = useState<string>('');

  // Handlers
  const handleSearchSubmit = useCallback(
    (search: string) => setSearch(search),
    []
  );

  // Memo
  const chatId = useMemo(() => {
    const match = matchPath<{ chatId: string }>(location.pathname, {
      path: routes.COMPANY.CHAT.DIALOG
    });

    return match?.params?.chatId;
  }, [location.pathname]);

  // Data
  const { data } = useQuery<{ chat: IChat }>(GET_CHAT_BY_ID, {
    variables: { chatId }
  });

  return {
    chatId,
    chat: data?.chat,
    handleSearchSubmit,
    search
  };
};

const useChatRefetch = () => {
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
          pagination: { first: 20 },
          status: ChatStatus.CLOSED
        }
      },
      {
        query: GET_CHAT_LIST,
        variables: {
          companyId,
          pagination: { first: 20 },
          status: ChatStatus.OPENED
        }
      }
    ],
    [companyId]
  );

  return { companyId, limit, refetchQueries };
};

export { useChatView, useChatRefetch };
