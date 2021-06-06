import { useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';

// GraphQL
import GET_CURRENT_PLAN from './graphql/currentPlan.gql';

const useBilling = () => {
  // Setup
  const { companyId }: any = useParams();

  // Data
  const { data } = useQuery(GET_CURRENT_PLAN, {
    variables: { companyId }
  });

  return {
    date: data?.currentPlan?.plan
  };
};

export { useBilling };
