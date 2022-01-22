import React, { useCallback, useMemo } from 'react';
import { generatePath, useHistory } from 'react-router-dom';

// Components
import Button from '@components/Button';
import Link from '@components/Link';
import Page, { Wrapper } from '@components/Page';
import Status from '@components/Status';
import Table from '@components/Table';

// Fragments
import { FlowsActions } from './Actions';
import { FlowsCreate, useFlowsCreate } from './Create';

// Hooks
import { useFlows } from './Flows.hooks';

// Interfaces
import { IChannel } from '@interfaces/channel.interface';
import { Flow, FlowStatus } from '@flow/interfaces/flow.interface';

// Routes
import { FLOW_ROUTES } from '@flow/Flow.routes';

// Styles
import styles from './Flows.scss';
import Avatar from '@components/Avatar';
import { COMPANY_ROUTES } from '@company/Company.routes';

export const Flows: React.FC = () => {
  // Setup
  const { companyId, data } = useFlows();
  const { modal } = useFlowsCreate();
  const { push } = useHistory();

  // Handlers
  const handleLinkClick = useCallback(
    (event: React.SyntheticEvent<HTMLAnchorElement>) => {
      event.stopPropagation();
    },
    []
  );

  const handleTrClick = useCallback(
    ({ id, status }: Flow) =>
      push(
        generatePath(
          status === FlowStatus.PUBLISHED
            ? FLOW_ROUTES.FLOW
            : FLOW_ROUTES.FLOW_EDIT,
          {
            companyId,
            flowId: id
          }
        )
      ),
    [companyId, push]
  );

  // Memo
  const columns = useMemo(
    () => [
      {
        accessor: 'status',
        Cell: ({ value }: any) => (
          <Status
            color={
              value === FlowStatus.UNPUBLISHED
                ? 'orange'
                : value === FlowStatus.PUBLISHED
                ? 'green'
                : 'gray'
            }
            title={value}
          />
        ),
        Header: 'Status',
        maxWidth: 200
      },
      {
        accessor: 'title',
        Header: 'Name'
      },
      {
        accessor: 'channels',
        Cell: ({ value }: { value: IChannel[] }) => (
          <div className={styles.Channels}>
            {value.map(({ id, source }) => (
              <Link
                key={id}
                onClick={handleLinkClick}
                to={generatePath(COMPANY_ROUTES.CHANNEL, {
                  companyId,
                  channelId: id
                })}
              >
                <Avatar
                  alt={source.title}
                  src={source.photo}
                  sourceType={source.type}
                  toColor={id}
                />
              </Link>
            ))}
          </div>
        ),
        Header: 'Channels'
      },
      {
        accessor: 'updatedAt',
        Header: 'Modified'
      },
      {
        accessor: 'id',
        Cell: ({ row }: any) => <FlowsActions {...row.original} />,
        maxWidth: 40
      }
    ],
    [companyId, handleLinkClick]
  );

  return (
    <Page className={styles.Root} title="Flows">
      <Wrapper
        actions={
          <Button
            color="blue"
            icon="far fa-plus"
            onClick={modal.openModal}
            variant="outlined"
          >
            Create Flow
          </Button>
        }
        title="Flows"
      >
        <Table columns={columns} data={data} onTrClick={handleTrClick} />
      </Wrapper>

      <FlowsCreate />
    </Page>
  );
};
