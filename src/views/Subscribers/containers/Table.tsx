import * as React from 'react';

// Components
import Avatar from '@components/Avatar';
import Table from '@components/Table';
import { Caption, P } from '@components/Typography';

// Styles
import styles from './Table.scss';

const SubscribersTable: React.FC<Subscribers.Table.Props> = ({ data }: any) => {
  const columns = React.useMemo(
    () => [
      {
        accessor: 'source.photo',
        Cell: ({ row }: any) => {
          const { firstname, lastname, photo, type } = row?.original?.source;

          return (
            <Avatar
              alt={`${firstname} ${lastname}`}
              src={photo}
              sourceType={type}
            />
          );
        },
        Header: '',
        maxWidth: 60
      },
      {
        accessor: 'source.firstname',
        Cell: ({ row }: any) => {
          const { id, firstname, lastname, username } = row?.original?.source;

          return (
            <div className={styles.User}>
              <P component="div">{`${firstname} ${lastname}`}</P>

              <a
                className={styles.UserLink}
                href={`https://vk.com/id${id}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Caption component="span">{`@${username}`}</Caption>
              </a>
            </div>
          );
        },
        Header: 'Subscriber'
      },
      {
        accessor: 'status',
        Header: 'Status'
      },
      {
        accessor: 'creadedAt',
        Header: 'Date'
      }
    ],
    []
  );

  return <Table columns={columns} data={data} />;
};

export default SubscribersTable;
