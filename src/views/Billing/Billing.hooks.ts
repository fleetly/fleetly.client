import { useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';

// GraphQL
import GET_CURRENT_PLAN from './Common/graphql/currentPlan.gql';

// Interfaces
import { ISubscription } from '@interfaces/subscription.interface';

const useBilling = () => {
  // Setup
  const { companyId }: any = useParams();

  // Data
  const { data } = useQuery<{ currentPlan: ISubscription }>(GET_CURRENT_PLAN, {
    variables: { companyId }
  });

  return {
    payments: data?.currentPlan.payments || [],
    subscription: data?.currentPlan
  };
};

export { useBilling };
