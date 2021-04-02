import { useQuery } from 'react-apollo';
import { useRouteMatch } from 'react-router-dom';

// GraphQL
import GET_COMPANY_LIST from '@graphql/getCompanyList.gql';

// Interfaces
import { ICompany } from '@interfaces/company.interface';

// Routes
import ROUTES from '@routes';

const useMainView = () => {
  // State
  const isCompany = !!useRouteMatch(ROUTES.COMPANY.ROOT);
  const isProfile = !!useRouteMatch(ROUTES.PROFILE.GENERAL);

  // Data
  const { data, loading } = useQuery<{ companies: ICompany[] }>(
    GET_COMPANY_LIST
  );
  const companies = data?.companies || [];

  return {
    companies,
    isCompany,
    isProfile,
    loading
  };
};

export { useMainView };
