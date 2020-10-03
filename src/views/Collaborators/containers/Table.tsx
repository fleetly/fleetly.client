import * as React from 'react';

// Components
import Avatar from '@components/Avatar';
import Button from '@components/Button';
import Table from '@components/Table';
import { P } from '@components/Typography';

// Styles
import styles from './Table.scss';

const CollaboratorsTable: React.FunctionComponent<Collaborators.Table.Props> = ({
  data,
  onDelete
}) => {
  const handleRemoveClick = React.useCallback(
    (event: React.SyntheticEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      onDelete(event.currentTarget.getAttribute('id') || '');
    },
    [onDelete]
  );

  const columns = React.useMemo(
    () => [
      {
        accessor: 'avatar',
        Cell: ({ alt, src }: any) => <Avatar alt={alt} src={src} />,
        Header: '',
        maxWidth: 40
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
            color="danger"
            icon="far fa-trash-alt"
            id={value}
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

export default CollaboratorsTable;
