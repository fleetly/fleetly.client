import { useMutation, useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';

// Components
import { gqlErrorHandler } from '@components/Form';

// GraphQL
import GET_USER_BY_ID from '@graphql/getUserById.gql';
import UPDATE_USER from './graphql/UpdateUser.glq';

const useProfileGenerals = () => {
  const { userId } = useParams<{ userId: string }>();

  const { data } = useQuery(GET_USER_BY_ID, { variables: { userId } });

  const [updateUserName] = useMutation(UPDATE_USER);

  const handleUpdateNameFormSubmit = React.useCallback(
    async ({ newName }: General.UpdateNameFormValues) => {
      try {
        return await updateUserName({ variables: { userId, newName } });
      } catch (error) {
        return gqlErrorHandler(error);
      }
    },
    [userId, updateUserName]
  );

  return { data, handleUpdateNameFormSubmit };
};

export { useProfileGenerals };
