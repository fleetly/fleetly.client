import { get } from 'lodash';
import { useMutation, useQuery } from 'react-apollo';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

// Components
import { gqlErrorHandler } from '@components/Form';

// Constants
import { ADD_COLLABORATOR_MODAL } from '@constants';

// GraphQL
import ADD_COLLABORATOR from './graphql/addCollaborator.gql';
import GET_COLLABORATOR_LIST from './graphql/getCollaboratorList.gql';
import REMOVE_COLLABORATOR from './graphql/removeCollaborator.gql';

// Interfaces
import { ICollaborator } from '@interfaces/collaborator.interface';

// Store
import { closeModal, openModal } from '@store';

const useCollaborators = () => {
  // Setup
  const { companyId }: any = useParams();
  const dispatch = useDispatch();

  // Data
  const { data } = useQuery(GET_COLLABORATOR_LIST, {
    variables: { companyId }
  });
  const collaborators: ICollaborator[] = get(data, 'collaborators', []);

  // Mutation
  const refetchQueries = [
    { query: GET_COLLABORATOR_LIST, variables: { companyId } }
  ];

  const [addCollaborator] = useMutation(ADD_COLLABORATOR, { refetchQueries });
  const [removeCollaborator] = useMutation(REMOVE_COLLABORATOR, {
    refetchQueries
  });

  // Handlers
  const handleAddClick = () => dispatch(openModal(ADD_COLLABORATOR_MODAL));

  const handleRemoveClick = (collaboratorId: string) =>
    removeCollaborator({ variables: { companyId, collaboratorId } });

  const handleFormSubmit = async ({ userId }: any) => {
    try {
      await addCollaborator({ variables: { companyId, userId } });
      return dispatch(closeModal(ADD_COLLABORATOR_MODAL));
    } catch (error) {
      return gqlErrorHandler(error);
    }
  };

  return {
    collaborators,
    companyId,
    handleAddClick,
    handleRemoveClick,
    handleFormSubmit
  };
};

export { useCollaborators };
