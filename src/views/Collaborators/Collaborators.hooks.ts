import { useMutation } from 'react-apollo';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

// Components
import { gqlErrorHandler } from '@components/Form';

// Constants
import { ADD_COLLABORATOR_MODAL } from '@constants';

// GraphQL
import ADD_COLLABORATOR from './graphql/addCollaborator.gql';
import GET_COLLABORATOR_LIST from './graphql/getCollaboratorList.gql';

// Store
import { closeModal, openModal } from '@store';

const useCollaborators = () => {
  // Setup
  const { companyId }: any = useParams();
  const dispatch = useDispatch();

  // Mutation
  const refetchQueries = [
    { query: GET_COLLABORATOR_LIST, variables: { companyId } }
  ];

  const [addCollaborator] = useMutation(ADD_COLLABORATOR, { refetchQueries });

  // Handlers
  const handleAddClick = () => dispatch(openModal(ADD_COLLABORATOR_MODAL));

  const handleAddFormSubmit = async ({
    userId
  }: Collaborators.AddFormValues) => {
    try {
      await addCollaborator({ variables: { companyId, userId } });
      return dispatch(closeModal(ADD_COLLABORATOR_MODAL));
    } catch (error) {
      return gqlErrorHandler(error);
    }
  };

  return {
    handleAddClick,
    handleAddFormSubmit
  };
};

export { useCollaborators };
