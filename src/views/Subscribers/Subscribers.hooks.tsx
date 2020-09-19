import * as React from 'react';
import { useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';

// Components
import Avatar from '@components/Avatar';
import { Caption, P } from '@components/Typography';

// GraphQL
import GET_SUBSCRIBER_LIST from './graphql/getSubscriberList.gql';

// Styles
import styles from './Subscribers.scss';

const useSubscribers = () => {
  const { companyId } = useParams();
  const { data } = useQuery(GET_SUBSCRIBER_LIST, { variables: { companyId } });

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
          const { firstname, lastname, username } = row.original.source;

          return (
            <div className={styles.User}>
              <P component="div">{`${firstname} ${lastname}`}</P>

              <a
                className={styles.UserLink}
                href={`https://vk.com/${username}`}
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

  return {
    columns,
    data: data?.subscribers || []
  };
};

export { useSubscribers };
