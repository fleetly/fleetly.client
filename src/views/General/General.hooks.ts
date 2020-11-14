import * as React from 'react';
import { useMutation, useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';

// Components
import { gqlErrorHandler } from '@components/Form';

// GraphQL
import GET_COMPANY_BY_ID from '@graphql/getCompanyById.gql';
import UPDATE_COMPANY_NAME from './graphql/updateCompanyName.gql';

// Interfaces
import { ICompany } from '@interfaces/company.interface';

const useGenerals = () => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();

  // Data
  const { data } = useQuery<{ company: ICompany }>(GET_COMPANY_BY_ID, {
    variables: { companyId }
  });

  // Mutations
  const [updateCompanyName] = useMutation(UPDATE_COMPANY_NAME);

  const handleUpdateNameFormSubmit = React.useCallback(
    async ({ newName }: General.UpdateNameFormValues) => {
      try {
        return await updateCompanyName({ variables: { companyId, newName } });
      } catch (error) {
        return gqlErrorHandler(error);
      }
    },
    [companyId, updateCompanyName]
  );

  return {
    company: data?.company,
    handleUpdateNameFormSubmit
  };
};

export { useGenerals };
