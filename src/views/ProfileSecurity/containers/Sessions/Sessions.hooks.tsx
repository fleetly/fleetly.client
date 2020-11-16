import * as React from 'react';
import { useMutation, useQuery } from 'react-apollo';

// GraphQL
import DELETE_ALL_SESSIONS from '../../graphql/deleteAllSessions.gql';
import DELETE_SESSION from '../../graphql/deleteSession.gql';
import GET_SESSIONS_LIST from '../../graphql/getSessionsList.gql';

// Interfaces
import { ISession } from '@interfaces/session.interface';

const useSessions = () => {
  // Data
  const { data } = useQuery<{ sessions: ISession[] }>(GET_SESSIONS_LIST);
  const sessions =
    data?.sessions.sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    ) || [];

  // Mutations
  const refetchQueries = [{ query: GET_SESSIONS_LIST }];

  const [deleteSession] = useMutation(DELETE_SESSION, {
    refetchQueries
  });
  const [deleteAllSessions] = useMutation(DELETE_ALL_SESSIONS, {
    refetchQueries
  });

  // Handlers
  const handleDeleteClick = React.useCallback(
    (event: React.SyntheticEvent<HTMLButtonElement>) => {
      deleteSession({
        variables: { sessionId: event.currentTarget.dataset.sessionId }
      });
    },
    [deleteSession]
  );

  return {
    handleDeleteClick,
    handleDeleteAllClick: () => deleteAllSessions(),
    sessions
  };
};

export { useSessions };
