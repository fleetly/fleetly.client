import { useQuery } from 'react-apollo';

// GraphQL
import GET_COMPANY_LIST from '@graphql/getCompanyList.gql';

const useCollaboration = () => {
  // Data
  const { data } = useQuery(GET_COMPANY_LIST);
  const collabotaions = data?.companies || [];

  return {
    collabotaions
  };
};

export { useCollaboration };
