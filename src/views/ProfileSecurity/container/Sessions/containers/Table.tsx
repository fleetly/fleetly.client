import * as React from 'react';

// Components
import Button from '@components/Button';
import Table from '@components/Table';

const SessionsTable: React.FunctionComponent<Sessions.TableProps> = ({
  data,
  onDelete
}) => {
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
        accessor: 'device',
        Header: '',
        maxWidth: 24
      },
      {
        accessor: 'browser',
        Header: 'Device & Browser'
      },
      {
        accessor: 'updatedAt',
        Header: 'Date'
      },
      {
        accessor: 'os',
        Header: 'Os'
      },
      {
        accessor: 'location',
        Header: 'Location'
      },
      {
        accessor: 'ip',
        Header: 'IP'
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

  return <Table columns={columns} data={data} />;
};

export default SessionsTable;
