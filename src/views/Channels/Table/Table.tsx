import { ChannelStatus } from '@fleetly/common/dist/interfaces';
import * as React from 'react';

// Components
import Avatar from '@components/Avatar';
import Button from '@components/Button';
import Link from '@components/Link';
import Status from '@components/Status';
import Table from '@components/Table';
import { Caption, P } from '@components/Typography';

// Hooks
import { useChannelsTable } from './Table.hooks';

// Interfaces
import { IStatus } from '@interfaces/status.interface';

// Styles
import styles from './Table.scss';

const ChannelsTable = ({ data }: any) => {
  // Setup
  const {
    handleEnableClick,
    handleDisableClick,
    handleDeleteClick,
    handleRowClick
  } = useChannelsTable();

  // Data
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
          const { id, link, name, title } = row?.original?.source;

          return (
            <div className={styles.Channel}>
              <P component="div">{title}</P>
              <Link to={link}>
                <Caption component="span">@{name || id}</Caption>
              </Link>
            </div>
          );
        },
        Header: 'Name'
      },
      {
        accessor: 'status',
        Cell: ({ value }: { value: IStatus<ChannelStatus> }) => (
          <Status color={value.color} title={value.type} />
        ),
        Header: 'Status'
      },
      { accessor: 'messages', Cell: () => 0, Header: 'Messages' },
      { accessor: 'subscribers', Cell: () => 0, Header: 'Subscribers' },
      {
        accessor: 'id',
        Cell: ({ row, value }: any) => {
          const status: ChannelStatus = row.original.status.type;
          const isActive = status === ChannelStatus.ACTIVE;

          return (
            <div className={styles.Actions}>
              {isActive && <Button icon="far fa-sync" variant="outlined" />}

              <Button
                color={isActive ? 'danger' : 'success'}
                icon="far fa-power-off"
                id={value}
                onClick={isActive ? handleDisableClick : handleEnableClick}
                variant="outlined"
              />

              {!isActive && (
                <Button
                  color="danger"
                  icon="far fa-trash-alt"
                  id={value}
                  onClick={handleDeleteClick}
                  variant="outlined"
                />
              )}
            </div>
          );
        },
        Header: '',
        maxWidth: 92
      }
    ],
    [handleDeleteClick, handleDisableClick, handleEnableClick]
  );

  return <Table columns={columns} data={data} onTrClick={handleRowClick} />;
};

export default ChannelsTable;
