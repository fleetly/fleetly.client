import moment from 'moment';
import * as React from 'react';

// Components
import Avatar from '@components/Avatar';
import Status from '@components/Status';
import Table from '@components/Table';
import { Caption, P } from '@components/Typography';

// Constants
import { MESSAGE_POLICY_STATUS, SUBSCRIBER_MODAL } from '@constants';

// Store
import { useModals } from '@store';

// Styles
import styles from './Table.scss';

const SubscribersTable: React.FC<Subscribers.Table.Props> = ({ data }: any) => {
  // Setup
  const { openModal } = useModals(SUBSCRIBER_MODAL);

  // Data
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
        accessor: 'messagePolicy',
        Cell: ({ value }) => <Status {...MESSAGE_POLICY_STATUS[value]} />,
        Header: 'Message policy'
      },
      {
        accessor: 'createdAt',
        Cell: ({ value }) => moment(value).fromNow(),
        Header: 'Date'
      }
    ],
    []
  );

  // Handlers
  const handleTrClick = React.useCallback(
    ({ id }) => openModal({ subscriberId: id }),
    [openModal]
  );

  return <Table columns={columns} data={data} onTrClick={handleTrClick} />;
};

export default SubscribersTable;
