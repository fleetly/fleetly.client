import { Role } from '@fleetly/common/dist/enums';
import * as React from 'react';

// Components
import Avatar from '@components/Avatar';
import Button from '@components/Button';
import Status from '@components/Status';
import Table from '@components/Table';
import { Wrapper } from '@components/Page';

// Constants
import { ROLES } from '@constants';

// Hooks
import { useCollaborationCompaniesView } from './Companies.hooks';

// Utils
import { convertToColor } from '@utils/string';

const CollaborationCompanies: React.FC<Collaboration.CompaniesProps> = ({
  data
}) => {
  const { handleLeaveClick } = useCollaborationCompaniesView();

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
        Cell: ({ value }: any) => {
          const { color, label } =
            ROLES.find((role) => role.value === value) || ROLES[2];
          return <Status color={color} title={label} />;
        },
        Header: 'Role'
      },
      {
        accessor: 'id',
        Cell: ({ row, value }: any) =>
          row?.original?.role !== 'OWNER' && (
            <Button
              color="danger"
              data-company-id={value}
              onClick={handleLeaveClick}
              variant="outlined"
            >
              Leave
            </Button>
          ),
        Header: 'Leave',
        maxWidth: 120
      }
    ],
    [handleLeaveClick]
  );

  return (
    <Wrapper title="Companies">
      <Table columns={columns} data={data} />
    </Wrapper>
  );
};

export default CollaborationCompanies;
