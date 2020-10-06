import * as React from 'react';

// Components
import Button from '@components/Button';
import Table from '@components/Table';

import { ColorCell } from '../components/Color';

const TagsTable: React.FC<Tags.Table.Props> = ({ data, onDelete, onEdit }) => {
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

export default TagsTable;
