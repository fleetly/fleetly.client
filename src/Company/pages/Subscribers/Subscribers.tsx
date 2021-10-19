import moment from 'moment';
import React, { useMemo } from 'react';

// Assets
import emptyImage1x from './assets/empty@1x.png';
import emptyImage2x from './assets/empty@1x.png';

// Components
import Avatar from '@components/Avatar';
import { Hero } from '@components/Hero';
import { Image } from '@components/Picture';
import Link from '@components/Link';
import Loader from '@components/Loader';
import Page, { Wrapper } from '@components/Page';
import Status from '@components/Status';
import Table from '@components/Table';
import { Text } from '@components/Typography';

// Constants
import { MESSAGE_POLICY_STATUS } from '@constants';

// Hooks
import { useSubscribersPage } from './Subscribers.hooks';

// Styles
import styles from './Subscribers.scss';

const Subscribers: React.FC = () => {
  const {
    count,
    hasMore,
    handleFetchMore,
    handleTrClick,
    loading,
    subscribers
  } = useSubscribersPage();

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

  const hasSubscribers = subscribers.length > 0;

  return (
    <Page className={styles.Root} title="Subscribers">
      <Wrapper title="Subscribers">
        {!hasSubscribers && loading ? (
          <Loader />
        ) : hasSubscribers ? (
          <Table
            columns={columns}
            count={count}
            hasMore={hasMore}
            data={subscribers}
            onFetchMore={handleFetchMore}
            onTrClick={handleTrClick}
          />
        ) : (
          <Hero
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
