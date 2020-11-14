import { useMutation } from 'react-apollo';
import { useParams } from 'react-router-dom';

// Components
import { gqlErrorHandler } from '@components/Form';

// GraphQL
import RENAME_COMPANY from './graphql/renameCompany.gql';

// Interfaces
import { IGeneral } from '@interfaces/general.interface';

const useGenerals = () => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();

  const [renameCompany] = useMutation(RENAME_COMPANY);

  const handleFormSubmit = async ({ newName }: IGeneral) => {
    const mutate = renameCompany({ variables: { companyId, newName } });

    try {
      return await mutate;
    } catch (error) {
      return gqlErrorHandler(error);
    }
  };

  return {
    handleFormSubmit
  };
};

export { useGenerals };
