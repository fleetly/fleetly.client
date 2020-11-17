import * as React from 'react';

// Components
import Avatar from '@components/Avatar';
import Button from '@components/Button';
import Table from '@components/Table';

// Utils
import { convertToColor } from '@utils/string';

const CollaborationsTable: React.FC<ProfileCollaboration.Table.Props> = ({
  data
}) => {
  const columns = React.useMemo(
    () => [
      {
        accessor: 'icon',
        Cell: ({ row }: any) => (
          <Avatar
            alt={row?.original?.title}
            color={convertToColor(row?.original?.id)}
          />
        ),
        Header: '',
        maxWidth: 60
      },
      {
        accessor: 'title',
        Header: 'Title'
      },
      {
        accessor: 'role',
        Header: 'Role'
      },
      {
        accessor: 'leave',
        Cell: ({ value }: any) => (
          <Button data-company-id={value} color="danger" variant="outlined">
            Leave
          </Button>
        ),
        Header: 'Leave',
        maxWidth: 120
      }
    ],
    []
  );
  return <Table columns={columns} data={data} />;
};

export default CollaborationsTable;
