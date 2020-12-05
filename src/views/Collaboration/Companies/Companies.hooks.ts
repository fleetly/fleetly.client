import * as React from 'react';
import { useMutation } from 'react-apollo';

// GraphQl
import GET_COMPANY_LIST from '@graphql/getCompanyList.gql';
import LEAVE_COMPANY from './graphql/leaveCompany.gql';

const useCollaborationCompaniesView = () => {
  // Mutation
  const [leaveCompany] = useMutation(LEAVE_COMPANY, {
    refetchQueries: [{ query: GET_COMPANY_LIST }]
  });

  // Handlers
  const handleLeaveClick = React.useCallback(
    async (event: React.SyntheticEvent<HTMLButtonElement>) => {
      try {
        return await leaveCompany({
          variables: { companyId: event.currentTarget.dataset.companyId }
        });
      } catch (error) {
        return false;
      }
    },
    [leaveCompany]
  );

  return {
    handleLeaveClick
  };
};

export { useCollaborationCompaniesView };
