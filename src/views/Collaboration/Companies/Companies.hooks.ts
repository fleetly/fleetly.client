import * as React from 'react';
import { useMutation, useQuery } from 'react-apollo';

// GraphQl
import GET_COMPANY_LIST from '@graphql/getCompanyList.gql';
import LEAVE_COMPANY from './graphql/leaveCompany.gql';

// Interfaces
import { ICompany } from '@interfaces/company.interface';

const useCompanies = () => {
  // Data
  const { refetch } = useQuery<{ company: ICompany[] }>(GET_COMPANY_LIST);

  // Mutation
  const [leaveCompany] = useMutation(LEAVE_COMPANY);

  // Handlers
  const handleLeaveClick = React.useCallback(
    async (event: React.SyntheticEvent<HTMLButtonElement>) => {
      try {
        await leaveCompany({
          variables: { companyId: event.currentTarget.dataset.companyId }
        });

        return refetch();
      } catch (error) {
        return false;
      }
    },
    [leaveCompany, refetch]
  );

  return {
    handleLeaveClick
  };
};

export { useCompanies };
