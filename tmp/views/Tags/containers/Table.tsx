import * as React from 'react';

// Components
import Button from '@components/Button';
import Status from '@components/Status';
import Table from '@components/Table';

const TagsTable: React.FC<Tags.Table.Props> = ({ data, onDelete, onEdit }) => {
  const handleDeleteClick = React.useCallback(
    (event: React.SyntheticEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      event.currentTarget.dataset.tagId &&
        onDelete(event.currentTarget.dataset.tagId);
    },
    [onDelete]
  );

  const columns = React.useMemo(
    () => [
      {
        accessor: 'color',
        Cell: ({ value }: any) => <Status color={value} />,
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
            data-tag-id={value}
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
    [handleDeleteClick]
  );

  return <Table columns={columns} data={data} onTrClick={onEdit} />;
};

export default TagsTable;
