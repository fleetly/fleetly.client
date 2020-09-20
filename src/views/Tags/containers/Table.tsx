import * as React from 'react';

// Components
import Button from '@components/Button';
import Table from '@components/Table';

import { ColorCell } from '../components/Color';

const TagsTable: React.FunctionComponent<Tags.Table.Props> = ({
  data,
  onDelete,
  onEdit
}) => {
  const columns = React.useMemo(
    () => [
      {
        accessor: 'color',
        Cell: ({ value }: any) => <ColorCell color={value} />,
        Header: '',
        maxWidth: 32
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

export default TagsTable;
