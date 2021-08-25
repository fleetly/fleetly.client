import * as React from 'react';
import { useMutation } from 'react-apollo';

// Components
import { gqlErrorHandler } from '@components/Form';

// GraphQL
import UPDATE_PASSWORD from './graphql/updatePassword.gql';

const useSecurityView = () => {
  // Mutations
  const [updatePassword] = useMutation(UPDATE_PASSWORD);

  // Handlers
  const handleFormSubmit = React.useCallback(
    async ({ newPassword, oldPassword }) => {
      try {
        return await updatePassword({
          variables: { newPassword, oldPassword }
        });
      } catch (error) {
        return gqlErrorHandler(error);
      }
    },
    [updatePassword]
  );

  return {
    handleFormSubmit
  };
};

export { useSecurityView };
