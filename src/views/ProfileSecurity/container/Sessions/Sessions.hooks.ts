import { get } from 'lodash';
import { useMutation, useQuery } from 'react-apollo';

// GraphQL
import DELETE_ALL_SESSIONS from './graphql/deleteAllSessions.gql';
import DELETE_SESSION from './graphql/deleteSession.gql';
import GET_SESSIONS_LIST from './graphql/getSessionsList.gql';

// Interfaces
import { ISession } from '@interfaces/session.interface';

const useSessions = () => {
  // Data
  const { data } = useQuery(GET_SESSIONS_LIST);
  const sessions: ISession[] = get(data, 'sessions', []);

  // Mutations
  const refetchQueries = [{ query: GET_SESSIONS_LIST }];

  const [deleteSession] = useMutation(DELETE_SESSION, {
    refetchQueries
  });
  const [deleteAllSessions] = useMutation(DELETE_ALL_SESSIONS, {
    refetchQueries
  });

  const handleDeleteClick = (sessionId: string) =>
    deleteSession({ variables: { sessionId } });

  return {
    handleAllDeleteClick: () => deleteAllSessions(),
    handleDeleteClick,
    sessions
  };
};

export { useSessions };
