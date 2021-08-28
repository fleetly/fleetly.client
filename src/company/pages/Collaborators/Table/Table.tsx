import { useMutation } from '@apollo/client';
import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';

// Components
import Avatar from '@components/Avatar';
import Button from '@components/Button';
import Table from '@components/Table';
import { Text } from '@components/Typography';

// GraphQL
import REMOVE_COLLABORATOR from './Table.gql';
import GET_COLLABORATOR_LIST from '../Collaborators.gql';

// Interfaces
import { ICollaborator } from '@interfaces/collaborator.interface';

// Fragments
import { CollaboratorsTableRole } from './Role';

// Store
import { useNotifications } from '@store';

export interface CollaboratorsTableProps {
  data: ICollaborator[];
}

export const CollaboratorsTable: React.FC<CollaboratorsTableProps> = ({
  data
}) => {
  // Setup
  const { handleApolloError } = useNotifications();
  const { companyId } = useParams<{ companyId: string }>();

  // Mutations
  const [removeCollaborator] = useMutation(REMOVE_COLLABORATOR, {
    onError: handleApolloError,
    refetchQueries: [{ query: GET_COLLABORATOR_LIST, variables: { companyId } }]
  });

  // Handlers
  const handleRemoveClick = useCallback(
    async (event: React.SyntheticEvent<HTMLButtonElement>) => {
      await removeCollaborator({
        variables: {
          collaboratorId: event.currentTarget.dataset.collaboratorId
        }
      });
    },
    [removeCollaborator]
  );

  // Memo
  const columns = React.useMemo(
    () => [
      {
        accessor: 'avatar',
        Cell: ({ row }: any) => {
          const { id, fullname } = row?.original?.user;
          return <Avatar alt={fullname} toColor={id} />;
        },
        Header: '',
        maxWidth: 52
      },
      {
        accessor: 'user.fullname',
        Cell: ({ value }: any) => <Text>{value}</Text>,
        Header: 'Name'
      },
      {
        accessor: 'user.username',
        Header: 'Username'
      },
      {
        accessor: 'role',
        Cell: ({ row, value }: any) => {
          const collaboratorId = row?.original?.id;

          return (
            <CollaboratorsTableRole
              initialValues={{ collaboratorId, newRole: value }}
            />
          );
        },
        Header: 'Status'
      },
      {
        accessor: 'user.email',
        Header: 'Email'
      },
      {
        accessor: 'id',
        Cell: ({ value }: any) => (
          <Button
            data-collaborator-id={value}
            color="danger"
            icon="far fa-times"
            onClick={handleRemoveClick}
            variant="outlined"
          />
        ),
        Header: '',
        maxWidth: 40
      }
    ],
    [handleRemoveClick]
  );

  return <Table columns={columns} data={data} />;
};
