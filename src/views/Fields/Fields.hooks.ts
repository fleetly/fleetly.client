import { omit } from 'lodash';
import { useMutation, useQuery } from 'react-apollo';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

// Components
import { gqlErrorHandler } from '@components/Form';

// Constants
import { CREATE_FIELD_MODAL } from '@constants';

// GraphQL
import CREATE_FIELD from './graphql/createField.gql';
import DELETE_FIELD from './graphql/deleteField.gql';
import GET_FIELD_LIST from './graphql/getFieldList.gql';
import UPDATE_FIELD from './graphql/updateField.gql';

// Interfaces
import { IField, IFieldTypeOption } from '@interfaces/field.interface';

// Store
import { closeModal, openModal } from '@store';

const useFields = () => {
  // Setup
  const { companyId }: any = useParams();
  const dispatch = useDispatch();

  // Data
  const { data } = useQuery<{
    fields: IField[];
    fieldTypes: IFieldTypeOption[];
  }>(GET_FIELD_LIST, {
    variables: { companyId }
  });

  const fields = data?.fields || [];
  const fieldTypes = data?.fieldTypes || [];

  // Mutations
  const refetchQueries = [{ query: GET_FIELD_LIST, variables: { companyId } }];

  const [createField] = useMutation(CREATE_FIELD, { refetchQueries });
  const [deleteField] = useMutation(DELETE_FIELD, {
    refetchQueries
  });
  const [udpateField] = useMutation(UPDATE_FIELD, { refetchQueries });

  // Handlers
  const handleCreateClick = () => dispatch(openModal(CREATE_FIELD_MODAL));

  const handleDeleteClick = (fieldId: string) =>
    deleteField({ variables: { companyId, fieldId } });

  const handleEditClick = ({ id, ...field }: IField) =>
    dispatch(
      openModal(CREATE_FIELD_MODAL, {
        data: { initialValues: { fieldId: id, field } },
        title: 'Edit the Field'
      })
    );

  const handleFormSubmit = async ({ fieldId, field }: Fields.FormValues) => {
    const mutate = fieldId
      ? udpateField({ variables: { fieldId, field: omit(field, 'type') } })
      : createField({ variables: { companyId, field } });

    try {
      await mutate;
      return dispatch(closeModal(CREATE_FIELD_MODAL));
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
    fields,
    fieldTypes
  };
};

export { useFields };
