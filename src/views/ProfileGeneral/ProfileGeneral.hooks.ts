import * as React from 'react';
import { useMutation, useQuery } from 'react-apollo';

// Components
import { gqlErrorHandler } from '@components/Form';

// GraphQL
import GET_USER_BY_ID from '@graphql/getUserById.gql';
import UPDATE_USER from './graphql/UpdateUser.gql';

const useProfileGenerals = () => {
  // Data
  const { data } = useQuery(GET_USER_BY_ID);

  // Mutation
  const [updateUser] = useMutation(UPDATE_USER);

  // Handlers
  const handleUpdateUserFormSubmit = React.useCallback(
    async (variables: ProfileGeneral.UpdateUserFormValues) => {
      try {
        return await updateUser({ variables });
      } catch (error) {
        return gqlErrorHandler(error);
      }
    },
    [userId, updateUser]
  );

  return { data, handleUpdateUserFormSubmit };
};

export { useProfileGenerals };
