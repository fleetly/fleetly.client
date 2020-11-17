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
  const { data, refetch } = useQuery<{ sessions: ISession[] }>(
    GET_SESSIONS_LIST
  );

  const sessions =
    data?.sessions.sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    ) || [];

  // Mutations
  // @todo - fucking apollo rejected refetch bug
  // const refetchQueries: PureQueryOptions[] = [{ query: GET_SESSIONS_LIST }];

  const [deleteSession] = useMutation(DELETE_SESSION);
  const [deleteAllSessions] = useMutation(DELETE_ALL_SESSIONS);

  // Handlers
  const handleDeleteClick = React.useCallback(
    async (event: React.SyntheticEvent<HTMLButtonElement>) => {
      try {
        await deleteSession({
          variables: { sessionId: event.currentTarget.dataset.sessionId }
        });

        return refetch();
      } catch (error) {
        return false;
      }
    },
    [deleteSession, refetch]
  );

  const handleDeleteAllClick = React.useCallback(async () => {
    try {
      await deleteAllSessions();
      return refetch();
    } catch (error) {
      return false;
    }
  }, [deleteAllSessions, refetch]);

  return {
    handleDeleteClick,
    handleDeleteAllClick,
    sessions
  };
};

export { useSessions };
