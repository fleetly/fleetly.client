import { get } from 'lodash';
import { useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';

// GraphQL
import GET_SUBSCRIBER_LIST from './graphql/getSubscriberList.gql';

// Interfaces
import { ISubscriber } from '@interfaces/subscriber.interface';

const useSubscribers = () => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();

  // Data
  const { data } = useQuery(GET_SUBSCRIBER_LIST, { variables: { companyId } });
  const subscribers: ISubscriber[] = get(data, 'subscribers', []);

  return {
    subscribers
  };
};

export { useSubscribers };
