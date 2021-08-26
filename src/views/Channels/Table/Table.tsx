import React, { useCallback, useMemo } from 'react';
import { useHistory, useParams } from 'react-router-dom';

// Fleetly
import { ChannelStatus } from '@fleetly/common/dist/interfaces';

// Components
import Avatar from '@components/Avatar';
import Link from '@components/Link';
import Status from '@components/Status';
import Table from '@components/Table';
import { Text } from '@components/Typography';

// Interfaces
import { IChannel } from '@interfaces/channel.interface';
import { IStatus } from '@interfaces/status.interface';

// Routes
import ROUTES from '@routes';

// Utils
import { fillUrl } from '@utils/url';

export interface ChannelsTableProps {
  data: IChannel[];
}

export const ChannelsTable: React.FC<ChannelsTableProps> = ({ data }) => {
  // Setup
  const { push } = useHistory();
  const { companyId } = useParams<{ companyId: string }>();

  // Handlers
  const handleTrClick = useCallback(
    ({ id }: IChannel) =>
      push(fillUrl(ROUTES.COMPANY.CHANNEL, { companyId, channelId: id })),
    [companyId, push]
  );

  // Memo
  const columns = useMemo(
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
            <div>
              <Text component="div">{title}</Text>

              <Link to={link}>
                <Text size="small">@{name || id}</Text>
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
      { accessor: 'subscribers', Cell: () => 0, Header: 'Subscribers' }
    ],
    []
  );

  return <Table columns={columns} data={data} onTrClick={handleTrClick} />;
};
