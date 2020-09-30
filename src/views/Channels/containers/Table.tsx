import * as React from 'react';

// Components
import Avatar from '@components/Avatar';
import Button from '@components/Button';
import Link from '@components/Link';
import Table from '@components/Table';
import { Caption, P } from '@components/Typography';

// Styles
import styles from './Table.scss';

const ChannelsTable = ({ data }: any) => {
  const columns = React.useMemo(
    () => [
      {
        accessor: 'source.id',
        Cell: ({ row }: { row: any }) => {
          const { photo, title, type } = row?.original?.source;
          return <Avatar alt={title} sourceType={type} src={photo} />;
        },
        Header: '',
        maxWidth: 60
      },
      {
        accessor: 'title',
        Cell: ({ row }: any) => {
          const { id, name, title } = row?.original?.source;

          return (
            <div className={styles.Channel}>
              <P component="div">{title}</P>
              <Link to={`https://vk.com/club${id}`}>
                <Caption component="span">@{name || id}</Caption>
              </Link>
            </div>
          );
        },
        Header: 'Name'
      },
      { accessor: 'status', Header: 'Status' },
      { accessor: 'messages', Cell: () => 0, Header: 'Messages' },
      { accessor: 'subscribers', Cell: () => 0, Header: 'Subscribers' },
      {
        accessor: 'id',
        Cell: ({ value }: any) => (
          <div className={styles.Actions}>
            <Button icon="far fa-sync" variant="outlined" />
            <Button icon="far fa-power-off" variant="outlined" />
            <Button color="danger" icon="far fa-trash-alt" variant="outlined" />
          </div>
        ),
        Header: '',
        maxWidth: 160
      }
    ],
    []
  );

  return <Table columns={columns} data={data} />;
};

export default ChannelsTable;
