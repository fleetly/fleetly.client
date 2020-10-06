import { get } from 'lodash';
import { useMutation, useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';

// GraphQL
import DELETE_ALL_SESSIONS from './graphql/deleteAllSessions.gql';
import DELETE_SESSION from './graphql/deleteSession.gql';
import GET_SESSIONS_LIST from './graphql/getSessionsList.gql';

// Interfaces
import { ISession } from '@interfaces/session.interface';

const useSessions = () => {
  // Setup
  const { userId } = useParams<{ userId: string }>();

  // Data
  const { data } = useQuery(GET_SESSIONS_LIST, { variables: { userId } });
  const sessions: ISession[] = get(data, 'sessions', []);

  // Mutations
  const refetchQueries = [{ query: GET_SESSIONS_LIST, variables: { userId } }];

  const [deleteSession] = useMutation(DELETE_SESSION, {
    refetchQueries
  });
  const [deleteAllSession] = useMutation(DELETE_ALL_SESSIONS, {
    refetchQueries
  });

  const handleAllDeleteClick = () =>
    deleteAllSession({ variables: { userId } });
  const handleDeleteClick = (sessionId: string) =>
    deleteSession({ variables: { userId, sessionId } });

  return {
    userId,
    handleAllDeleteClick,
    handleDeleteClick,
    sessions
  };
};

export { useSessions };
