import * as React from 'react';
import { useMutation, useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';

// Components
import { gqlErrorHandler } from '@components/Form';

// Containers
import DeleteForm from './containers/DeleteForm';
import DisableForm from './containers/DisableForm';
import UpdateNameForm from './containers/UpdateNameForm';

// Styles
import styles from './General.scss';

// GraphQL
import GET_COMPANY_BY_ID from '@graphql/getCompanyById.gql';
import UPDATE_COMPANY_NAME from './graphql/updateCompanyName.gql';

const useGenerals = () => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();

  // Data
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

  const forms = [
    {
      description: 'All incoming information will no longer be processed.',
      label: 'Disable',
      title: 'Disable this company',
      FormComponent: DisableForm
    },
    {
      description: 'Renaming your company can have unintended side effects.',
      label: 'Rename',
      title: (
        <>
          Rename <span className={styles.Name}>«{data?.company?.name}»</span> to
          something new
        </>
      ),
      FormComponent: UpdateNameForm,
      onSubmit: handleUCNFormSubmit
    },
    {
      description: 'Delete your company can have unintended side effect.',
      label: 'Delete',
      title: (
        <>
          Delete <span className={styles.Name}>«{data?.company?.title}»</span>
        </>
      ),
      FormComponent: DeleteForm
    }
  ];

  return {
    companyId,
    data,
    forms,
    handleUCNFormSubmit
  };
};

export { useGenerals };
