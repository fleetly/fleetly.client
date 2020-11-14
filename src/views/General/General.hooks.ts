import { useMutation } from 'react-apollo';
import { useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';

// Components
import { gqlErrorHandler } from '@components/Form';

// GraphQL
import GET_COMPANY_BY_ID from '@graphql/getCompanyById.gql';
import UPDATE_COMPANY_NAME from './graphql/renameCompany.gql';

const useGenerals = () => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();
  const { data } = useQuery(GET_COMPANY_BY_ID, { variables: { companyId } });

  // Mutations
  const [updateCompanyName] = useMutation(UPDATE_COMPANY_NAME);

  const handleUCNFormSubmit = async ({ newName }: General.UCNFormValues) => {
    try {
      return await updateCompanyName({ variables: { companyId, newName } });
    } catch (error) {
      return gqlErrorHandler(error);
    }
  };

  return {
    companyId,
    data,
    handleUCNFormSubmit
  };
};

export { useGenerals };
