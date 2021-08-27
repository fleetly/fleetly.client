import get from 'lodash/get';
import { useMutation, useQuery } from 'react-apollo';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

// Components
import { gqlErrorHandler } from '@components/Form';

// Constants
import { CREATE_TAG_MODAL } from '@constants';

// GraphQL
import CREATE_TAG from './graphql/createTag.gql';
import DELETE_TAG from './graphql/deleteTag.gql';
import GET_TAG_LIST from './graphql/getTagList.gql';
import UPDATE_TAG from './graphql/udpateTag.gql';

// Interfaces
import { ITag } from '@interfaces/tag.interface';

// Store
import { closeModal, openModal } from '@store';

const useTags = () => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();
  const dispatch = useDispatch();

  // Data
  const { data } = useQuery(GET_TAG_LIST, { variables: { companyId } });
  const tags: ITag[] = get(data, 'tags', []);

  // Mutations
  const refetchQueries = [{ query: GET_TAG_LIST, variables: { companyId } }];

  const [createTag] = useMutation(CREATE_TAG, {
    refetchQueries
  });
  const [deleteTag] = useMutation(DELETE_TAG, {
    refetchQueries
  });
  const [udpateTag] = useMutation(UPDATE_TAG);

  // Handlers
  const handleCreateClick = () => dispatch(openModal(CREATE_TAG_MODAL));

  const handleDeleteClick = (tagId: string) =>
    deleteTag({ variables: { companyId, tagId } });

  const handleEditClick = ({ id, ...tag }: ITag) =>
    dispatch(
      openModal(CREATE_TAG_MODAL, {
        data: { initialValues: { tagId: id, tag } },
        title: 'Edit the Tag'
      })
    );

  const handleFormSubmit = async ({ tag, tagId }: Tags.FormValues) => {
    const mutate = tagId
      ? udpateTag({ variables: { tagId, tag } })
      : createTag({ variables: { companyId, tag } });

    try {
      await mutate;
      return dispatch(closeModal(CREATE_TAG_MODAL));
    } catch (error) {
      return gqlErrorHandler(error);
    }
  };

  return {
    companyId,
    handleCreateClick,
    handleDeleteClick,
    handleEditClick,
    handleFormSubmit,
    tags
  };
};

export { useTags };
