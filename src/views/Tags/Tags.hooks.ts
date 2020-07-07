import * as React from 'react';
import { useMutation } from 'react-apollo';
import { useDispatch } from 'react-redux';
import { matchPath, useLocation } from 'react-router-dom';

// Data
import { TAGS_MODAL } from './data';

// GraphQL
import CREATE_TAG from './graphql/createTag.gql';
import DELETE_TAG from './graphql/deleteTag.gql';
import GET_TAG_LIST from './graphql/getTagList.gql';
import UPDATE_TAG from './graphql/udpateTag.gql';

// Routes
import ROUTES from '@routes';

// Store
import { closeModal, openModal } from '@store';

const useTags = () => {
  // Setup
  const dispatch = useDispatch();
  const location = useLocation();

  // Parse the company ID
  const companyId: string = React.useMemo(() => {
    const match: any = matchPath(location.pathname, {
      path: ROUTES.COMPANY.TAGS.path
    });

    return match?.params?.companyId;
  }, [location]);

  // Mutations
  const refetchQueries = [{ query: GET_TAG_LIST, variables: { companyId } }];

  const [createTag] = useMutation(CREATE_TAG, { refetchQueries });
  const [deleteTag] = useMutation(DELETE_TAG, {
    refetchQueries
  });
  const [udpateTag] = useMutation(UPDATE_TAG, { refetchQueries });

  // Handlers
  const handleAddClick = () => dispatch(openModal(TAGS_MODAL));

  const handleDeleteClick = (tagId: any) =>
    deleteTag({ variables: { companyId, tagId } });

  const handleEditClick = (initialValues: any) =>
    dispatch(
      openModal(TAGS_MODAL, {
        data: { id: initialValues.id, initialValues },
        title: 'Edit the Tag'
      })
    );

  const handleFormSubmit = ({ __typename, id, ...tag }: any) => {
    const mutate = id
      ? udpateTag({ variables: { tagId: id, tag } })
      : createTag({ variables: { companyId, tag } });

    return mutate.then(() => dispatch(closeModal(TAGS_MODAL)));
  };
  return {
    companyId,
    handleAddClick,
    handleDeleteClick,
    handleEditClick,
    handleFormSubmit
  };
};

export { useTags };
