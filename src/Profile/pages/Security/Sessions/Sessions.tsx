import { useMutation, useQuery } from '@apollo/client';
import classNames from 'classnames';
import moment from 'moment';
import React, { useCallback, useMemo } from 'react';

// Components
import Button from '@components/Button';
import Link from '@components/Link';
import { Wrapper } from '@components/Page';
import Status from '@components/Status';
import Table from '@components/Table';
import { H5, Text } from '@components/Typography';

// GraphQL
import DELETE_ALL_SESSIONS from './graphql/deleteAllSessions.gql';
import DELETE_SESSION from './graphql/deleteSession.gql';
import GET_SESSION_LIST from './graphql/getSessionList.gql';

// Interfaces
import { ISession } from '@interfaces/session.interface';

// Store
import { useNotifications } from '@store';

// Styles
import styles from './Sessions.scss';

// Utils
import { parseOS } from './utils/parseOs';

export const SecuritySessions = () => {
  // Setup
  const { handleApolloError } = useNotifications();

  // Data
  const { data, refetch } = useQuery<{ sessions: ISession[] }>(
    GET_SESSION_LIST
  );

  // Mutations
  const [deleteSession] = useMutation(DELETE_SESSION, {
    onError: handleApolloError
  });

  const [deleteAllSessions] = useMutation(DELETE_ALL_SESSIONS, {
    onError: handleApolloError
  });

  // Handlers
  const handleDeleteAllClick = useCallback(async () => {
    await deleteAllSessions();
    refetch();
  }, [deleteAllSessions, refetch]);

  const handleDeleteClick = useCallback(
    async (event: React.SyntheticEvent<HTMLButtonElement>) => {
      await deleteSession({
        variables: { sessionId: event.currentTarget.dataset.sessionId }
      });

      refetch();
    },
    [deleteSession, refetch]
  );

  // Memo
  const columns = useMemo(
    () => [
      {
        accessor: 'device',
        Cell: ({ row }: any) => {
          const { os } = row?.original;
          const { isDesktop, isMobile } = parseOS(os);

          return (
            <i
              className={classNames(styles.Device, 'far', {
                'fa-desktop': isDesktop,
                'fa-mobile': isMobile
              })}
            />
          );
        },
        Header: '',
        maxWidth: 48
      },
      {
        accessor: 'browser',
        Cell: ({ row }: any) => {
          const { browser, os } = row?.original;
          const { isAndroid, isApple, isWindows } = parseOS(os);

          return (
            <div>
              <H5>{browser}</H5>

              <Text className={styles.Description} size="small">
                <i
                  className={classNames(styles.OS, 'fab', {
                    'fa-android': isAndroid,
                    'fa-apple': isApple,
                    'fa-windows': isWindows
                  })}
                />
                {os}
              </Text>
            </div>
          );
        },
        Header: 'Device & Browser'
      },
      {
        accessor: 'location',
        Cell: ({ row }: any) => {
          const { ip, location } = row?.original;

          return (
            <div>
              <Link to={`https://google.com/maps/search/${location}`}>
                {location}
              </Link>

              <Text className={styles.Description} component="div" size="small">
                {ip}
              </Text>
            </div>
          );
        },
        Header: 'Location'
      },
      {
        accessor: 'isOnline',
        Cell: ({ value }: any) => (
          <Status
            color={value ? 'green' : 'red'}
            title={value ? 'Online' : 'Offline'}
          />
        ),
        Header: 'Status'
      },
      {
        accessor: 'updatedAt',
        Cell: ({ value }: any) => moment(value).fromNow(),
        Header: 'Date'
      },
      {
        accessor: 'id',
        Cell: ({ value }: any) => (
          <Button
            data-session-id={value}
            color="red"
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

  return (
    <Wrapper
      actions={
        <Button color="red" variant="outlined" onClick={handleDeleteAllClick}>
          Delete All
        </Button>
      }
      title="Recent Devices"
    >
      <Table columns={columns} data={data?.sessions || []} />
    </Wrapper>
  );
};
