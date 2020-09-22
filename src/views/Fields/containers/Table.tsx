import * as React from 'react';

// Components
import Button from '@components/Button';
import Table from '@components/Table';

const FieldsTable: React.FunctionComponent<Fields.Table.Props> = ({
  data,
  onDelete,
  onEdit
}) => {
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
            onClick={onDelete?.bind(null, value)}
            variant="outlined"
          />
        ),
        Header: '',
        maxWidth: 40
      }
    ],
    [onDelete]
  );
  return <Table columns={columns} data={data} onTrClick={onEdit} />;
};

export default FieldsTable;
