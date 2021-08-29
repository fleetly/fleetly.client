import { useMutation } from '@apollo/client';
import React, { useCallback, useMemo } from 'react';

// Components
import Avatar from '@components/Avatar';
import Button from '@components/Button';
import { Wrapper } from '@components/Page';
import Status from '@components/Status';
import Table from '@components/Table';

// Constants
import { ROLES } from '@constants';

// GraphQL
import LEAVE_COMPANY from './Companies.gql';
import GET_COLLABORATION_LIST from '../Collaboration.gql';

// Interfaces
import { ICompany } from '@interfaces/company.interface';

export interface CollaborationCompaniesProps {
  data: ICompany[];
}

export const CollaborationCompanies: React.FC<CollaborationCompaniesProps> = ({
  data
}) => {
  // Mutations
  const [leaveCompany] = useMutation(LEAVE_COMPANY, {
    refetchQueries: [{ query: GET_COLLABORATION_LIST }]
  });

  // Handlers
  const handleLeaveClick = useCallback(
    async (event: React.SyntheticEvent<HTMLButtonElement>) => {
      await leaveCompany({
        variables: { companyId: event.currentTarget.dataset.companyId }
      });
    },
    [leaveCompany]
  );

  // Memo
  const columns = useMemo(
    () => [
      {
        accessor: 'icon',
        Cell: ({ row }: any) => (
          <Avatar alt={row?.original?.title} toColor={row?.original?.id} />
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
        Header: 'Actions',
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
