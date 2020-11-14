import * as React from 'react';
import { useMutation, useQuery } from 'react-apollo';
import { useParams } from 'react-router-dom';

// Components
import Avatar from '@components/Avatar';
import Button from '@components/Button';
import { P } from '@components/Typography';

// Containers
import RoleForm from '../RoleForm';

// Constants
import { UPDATE_COLLABORATOR_ROLE_FORM } from '@constants';

// GraphQL
import GET_COLLABORATOR_LIST from '../../graphql/getCollaboratorList.gql';
import REMOVE_COLLABORATOR from '../../graphql/removeCollaborator.gql';
import UPDATE_COLLABORATOR_ROLE from '../../graphql/updateCollaboratorRole.gql';

// Interfaces
import { ICollaborator } from '@interfaces/collaborator.interface';

// Styles
import styles from './Table.scss';

// Utils
import { convertToColor } from '@utils/string';

const useCollaboratorsTable = () => {
  // Setup
  const { companyId }: any = useParams();

  // Data
  const { data } = useQuery<{ collaborators: ICollaborator[] }>(
    GET_COLLABORATOR_LIST,
    {
      variables: { companyId }
    }
  );
  const collaborators = data?.collaborators || [];

  // Mutations
  const refetchQueries = [
    { query: GET_COLLABORATOR_LIST, variables: { companyId } }
  ];

  const [removeCollaborator] = useMutation(REMOVE_COLLABORATOR, {
    refetchQueries
  });

  const [updateCollaboratorRole] = useMutation(UPDATE_COLLABORATOR_ROLE);

  // Handlers
  const handleRemoveClick = React.useCallback(
    (event: React.SyntheticEvent<HTMLButtonElement>) =>
      removeCollaborator({
        variables: {
          companyId,
          collaboratorId: event.currentTarget.dataset.collaboratorId
        }
      }),
    [companyId, removeCollaborator]
  );

  const handleRoleFormSubmit = React.useCallback(
    async (variables: Collaborators.RoleFormValues, dispatch, { reset }) => {
      try {
        await updateCollaboratorRole({ variables });
      } catch (error) {
        reset();
      }
    },
    [updateCollaboratorRole]
  );

  // Columns
  const columns = React.useMemo(
    () => [
      {
        accessor: 'avatar',
        Cell: ({ row }: any) => {
          const { id, username } = row?.original?.user;
          return <Avatar alt={username} color={convertToColor(id)} />;
        },
        Header: '',
        maxWidth: 52
      },
      {
        accessor: 'user.firstname',
        Cell: ({ row }: any) => {
          const { firstname, lastname } = row?.original?.user;

          return (
            <div className={styles.User}>
              <P component="div">{`${firstname} ${lastname}`}</P>
            </div>
          );
        },
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
            <RoleForm
              disabled={value === 'OWNER'}
              form={`${UPDATE_COLLABORATOR_ROLE_FORM}-${collaboratorId}`}
              initialValues={{ collaboratorId, newRole: value }}
              onSubmit={handleRoleFormSubmit}
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
    [handleRemoveClick, handleRoleFormSubmit]
  );

  return { columns, data: collaborators };
};

export { useCollaboratorsTable };
