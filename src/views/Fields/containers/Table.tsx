import * as React from 'react';

// Components
import Button from '@components/Button';
import Table from '@components/Table';

const FieldsTable: React.FC<Fields.Table.Props> = ({
  data,
  onDelete,
  onEdit
}) => {
  const handleDeleteClick = React.useCallback(
    (event: React.SyntheticEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      onDelete(event.currentTarget.getAttribute('id') || '');
    },
    [onDelete]
  );

  const columns = React.useMemo(
    () => [
      {
        accessor: 'title',
        Header: 'Name'
      },
      {
        accessor: 'type',
        Header: 'Type'
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
            color="danger"
            icon="far fa-trash-alt"
            id={value}
            onClick={handleDeleteClick}
            variant="outlined"
          />
        ),
        Header: '',
        maxWidth: 40
      }
    ],
    [handleDeleteClick]
  );
  return <Table columns={columns} data={data} onTrClick={onEdit} />;
};

export default FieldsTable;
