import * as React from 'react';

// Components
import Avatar from '@components/Avatar';
import Button from '@components/Button';
import Table from '@components/Table';

// Components
import { Wrapper } from '@components/Page';

// Utils
import { convertToColor } from '@utils/string';

const CollaborationCompanies: React.FC<Collaboration.CompaniesProps> = ({
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

  return (
    <Wrapper title="Companies">
      <Table columns={columns} data={data} />
    </Wrapper>
  );
};

export default CollaborationCompanies;
