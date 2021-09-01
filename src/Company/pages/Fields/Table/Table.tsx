import { useMutation } from '@apollo/client';
import omit from 'lodash/omit';
import React, { useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';

// Components
import Button from '@components/Button';
import Status from '@components/Status';
import Table from '@components/Table';

// Constants
import { CREATE_FIELD_MODAL } from '@constants';

// GraphQL
import DELETE_FIELD from './graphql/deleteField.gql';
import GET_FIELD_LIST from '../Fields.gql';

// Interfaces
import { IField, IFieldTypeOption } from '@interfaces/field.interface';

// Store
import { useModals } from '@store';

export interface FieldsTableProps {
  data: IField[];
  fieldTypes: IFieldTypeOption[];
}

export const FieldsTable: React.FC<FieldsTableProps> = ({
  data,
  fieldTypes
}) => {
  // Setup
  const { openModal } = useModals(CREATE_FIELD_MODAL);
  const { companyId } = useParams<{ companyId: string }>();

  // Mutations
  const [deleteField] = useMutation(DELETE_FIELD, {
    refetchQueries: [{ query: GET_FIELD_LIST, variables: { companyId } }]
  });

  // Handlers
  const handleDeleteClick = useCallback(
    (event: React.SyntheticEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      deleteField({
        variables: { fieldId: event.currentTarget.dataset.fieldId }
      });
    },
    [deleteField]
  );

  const handleTrClick = useCallback(
    ({ id, ...field }: IField) =>
      openModal({
        data: { fieldId: id, field: omit(field, 'type') },
        title: 'Update field'
      }),
    [openModal]
  );

  // Memo
  const columns = useMemo(
    () => [
      {
        accessor: 'type',
        Cell: ({ value }: any) => {
          const { color, label } =
            fieldTypes.find((fieldType) => fieldType.value === value) ||
            fieldTypes[0];

          return <Status color={color} title={label} />;
        },
        Header: 'Type',
        maxWidth: 160
      },
      {
        accessor: 'title',
        Header: 'Name'
      },
      {
        accessor: 'description',
        Header: 'Description'
      },
      {
        accessor: 'subscribers',
        Cell: () => 0,
        Header: 'Subscribers'
      },
      {
        accessor: 'id',
        Cell: ({ value }: any) => (
          <Button
            data-field-id={value}
            color="red"
            icon="far fa-trash-alt"
            onClick={handleDeleteClick}
            variant="outlined"
          />
        ),
        Header: '',
        maxWidth: 40
      }
    ],
    [fieldTypes, handleDeleteClick]
  );

  return <Table columns={columns} data={data} onTrClick={handleTrClick} />;
};
