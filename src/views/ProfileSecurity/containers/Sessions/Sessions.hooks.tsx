import { get } from 'lodash';
import * as React from 'react';
import { useMutation, useQuery } from 'react-apollo';

// Components
import Button from '@components/Button';

// GraphQL
import DELETE_ALL_SESSIONS from '../../graphql/deleteAllSessions.gql';
import DELETE_SESSION from '../../graphql/deleteSession.gql';
import GET_SESSIONS_LIST from '../../graphql/getSessionsList.gql';

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

  const handleDeleteClick = React.useCallback(
    (event: React.SyntheticEvent<HTMLButtonElement>) => {
      deleteSession({
        variables: { sessionId: event.currentTarget.dataset.sessionId }
      });
    },
    [deleteSession]
  );

  // Columns
  const columns = React.useMemo(
    () => [
      {
        accessor: 'device',
        Header: '',
        maxWidth: 24
      },
      {
        accessor: 'browser',
        Header: 'Device & Browser'
      },
      {
        accessor: 'updatedAt',
        Header: 'Date'
      },
      {
        accessor: 'os',
        Header: 'Os'
      },
      {
        accessor: 'location',
        Header: 'Location'
      },
      {
        accessor: 'ip',
        Header: 'IP'
      },
      {
        accessor: 'id',
        Cell: ({ value }: any) => (
          <Button
            data-session-id={value}
            color="danger"
            icon="far fa-trash-alt"
            onClick={handleDeleteClick}
            variant="outlined"
          />
        ),
        Header: '',
        maxWidth: 40
      }
    ],
    [handleDeleteClick]
  );

  return {
    columns,
    handleDeleteAllClick: () => deleteAllSessions(),
    sessions
  };
};

export { useSessions };
