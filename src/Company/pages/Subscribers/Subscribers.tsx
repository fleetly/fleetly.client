import { useQuery } from '@apollo/client';
import moment from 'moment';
import React, { useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';

// Assets
import emptyImage1x from './assets/empty@1x.png';
import emptyImage2x from './assets/empty@1x.png';

// Components
import Avatar from '@components/Avatar';
import Empty from '@components/Empty';
import Image from '@components/Image';
import Link from '@components/Link';
import Loader from '@components/Loader';
import Page, { Wrapper } from '@components/Page';
import Status from '@components/Status';
import Table from '@components/Table';
import { Text } from '@components/Typography';

// Constants
import { MESSAGE_POLICY_STATUS, SUBSCRIBER_MODAL } from '@constants';

// GraphQL
import GET_SUBSCRIBER_LIST from './Subscribers.gql';

// Interfaces
import { ISubscriber } from '@interfaces/subscriber.interface';

// Store
import { useModals } from '@store';

// Styles
import styles from './Subscribers.scss';

const Subscribers: React.FC = () => {
  // Setup
  const { openModal } = useModals(SUBSCRIBER_MODAL);
  const { companyId } = useParams<{ companyId: string }>();

  // Data
  const { data, loading } = useQuery<{ subscribers: ISubscriber[] }>(
    GET_SUBSCRIBER_LIST,
    { variables: { companyId } }
  );

  // Handlers
  const handleTrClick = useCallback(
    ({ id }: ISubscriber) => openModal({ data: { subscriberId: id } }),
    [openModal]
  );

  // Memo
  const columns = useMemo(
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
          const {
            id,
            firstname,
            lastname,
            link,
            username
          } = row?.original?.source;

          return (
            <div className={styles.User}>
              <Text component="div">{`${firstname || ''} ${
                lastname || ''
              }`}</Text>

              <Link to={link}>
                <Text size="small">{`@${username || id}`}</Text>
              </Link>
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

  const hasSubscribers = data?.subscribers && data?.subscribers.length > 0;

  return (
    <Page title="Subscribers">
      <Wrapper title="Subscribers">
        {!hasSubscribers && loading ? (
          <Loader />
        ) : hasSubscribers ? (
          <Table
            columns={columns}
            data={data?.subscribers || []}
            onTrClick={handleTrClick}
          />
        ) : (
          <Empty
            description="Do not scare your catch and soon it will be displayed here"
            image={
              <Image
                src={emptyImage1x}
                srcSet={{ '1x': emptyImage1x, '2x': emptyImage2x }}
              />
            }
            title="Shhh..."
          />
        )}
      </Wrapper>
    </Page>
  );
};

export default Subscribers;
