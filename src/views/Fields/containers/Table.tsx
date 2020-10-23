import * as React from 'react';

// Components
import Button from '@components/Button';
import Status from '@components/Status';
import Table from '@components/Table';

const FieldsTable: React.FC<Fields.TableProps> = ({
  data,
  fieldTypes,
  onDelete,
  onEdit
}) => {
  const handleDeleteClick = React.useCallback(
    (event: React.SyntheticEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      event.currentTarget.dataset.fieldId &&
        onDelete(event.currentTarget.dataset.fieldId);
    },
    [onDelete]
  );

  const columns = React.useMemo(
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
            color="danger"
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
  return <Table columns={columns} data={data} onTrClick={onEdit} />;
};

export default FieldsTable;
