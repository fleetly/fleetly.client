import { useQuery } from 'react-apollo';

// GraphQL
import GET_COMPANY_LIST from '@graphql/getCompanyList.gql';

// Interfaces
import { ICompany } from '@interfaces/company.interface';

const useCollaborationView = () => {
  // Data
  const { data } = useQuery<{ companies: ICompany[] }>(GET_COMPANY_LIST);

  const companies = data?.companies || [];

  return {
    companies,
    invitations: []
  };
};

export { useCollaborationView };