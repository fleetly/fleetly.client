import * as React from 'react';
import { useMutation, useQuery } from 'react-apollo';

// Components
import { gqlErrorHandler } from '@components/Form';

// GraphQL
import GET_USER_BY_ID from '@graphql/getUserById.gql';
import UPDATE_PROFILE from './graphql/updateProfile.gql';

const useProfileGeneralsView = () => {
  // Data
  const { data } = useQuery(GET_USER_BY_ID);

  // Mutation
  const [updateProfile] = useMutation(UPDATE_PROFILE);

  // Handlers
  const handleFormSubmit = React.useCallback(
    async (variables: ProfileGeneral.FormValues) => {
      try {
        return await updateProfile({ variables });
      } catch (error) {
        return gqlErrorHandler(error);
      }
    },
    [updateProfile]
  );

  return { handleFormSubmit, user: data?.user };
};

export { useProfileGeneralsView };
