import { useQuery } from '@apollo/client';
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';

// Fleetly
import { IPagination } from '@fleetly/common/dist/interfaces';

// Constants
import { SUBSCRIBER_MODAL } from '@constants';

// GraphQL
import GET_SUBSCRIBER_LIST from './Subscribers.gql';

// Interfaces
import { ISubscriber } from '@interfaces/subscriber.interface';

// Store
import { useModals } from '@store';

export const useSubscribersPage = () => {
  // Setup
  const LIMIT = 20;

  const { openModal } = useModals(SUBSCRIBER_MODAL);
  const { companyId } = useParams<{ companyId: string }>();

  // Data
  const { data, fetchMore, loading } = useQuery<{
    subscribers: IPagination<ISubscriber>;
  }>(GET_SUBSCRIBER_LIST, {
    variables: { companyId, pagination: { first: LIMIT } }
  });

  // Handlers
  const handleFetchMore = useCallback(() => {
    fetchMore({
      variables: {
        companyId,
        pagination: {
          after: data?.subscribers.pageInfo.endCursor,
          first: LIMIT
        }
      },
      updateQuery: (prevResult, { fetchMoreResult }) =>
        ({
          subscribers: {
            ...fetchMoreResult?.subscribers,
            items: [
              ...prevResult.subscribers.items,
              ...fetchMoreResult!.subscribers.items
            ]
          }
        } as any)
    });
  }, [companyId, data, fetchMore]);

  const handleTrClick = useCallback(
    ({ id }: ISubscriber) => openModal({ data: { subscriberId: id } }),
    [openModal]
  );

  return {
    count: data?.subscribers.items.length || 0,
    handleFetchMore,
    handleTrClick,
    hasMore: data?.subscribers.pageInfo.hasNextPage || false,
    loading,
    subscribers: data?.subscribers.items || []
  };
};
