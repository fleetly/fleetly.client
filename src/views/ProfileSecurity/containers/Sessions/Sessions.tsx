import { Color } from '@fleetly/common/dist/enums';
import classNames from 'classnames';
import moment from 'moment';
import * as React from 'react';

// Components
import Button from '@components/Button';
import Link from '@components/Link';
import { Wrapper } from '@components/Page';
import Status from '@components/Status';
import Table from '@components/Table';
import { Caption, H5 } from '@components/Typography';

// Hooks
import { useSessions } from './Sessions.hooks';

// Styles
import styles from './Sessions.scss';

// Utils
import { parseOS } from './utils/parseOs';

const Session = () => {
  const { handleDeleteClick, handleDeleteAllClick, sessions } = useSessions();

  const columns = React.useMemo(
    () => [
      {
        accessor: 'device',
        Cell: ({ row }: any) => {
          const { os } = row?.original;
          const { isDesktop, isMobile } = parseOS(os);

          return (
            <i
              className={classNames(styles.Device, 'far', {
                'fa-desktop': isDesktop,
                'fa-mobile': isMobile
              })}
            />
          );
        },
        Header: '',
        maxWidth: 48
      },
      {
        accessor: 'browser',
        Cell: ({ row }: any) => {
          const { browser, os } = row?.original;
          const { isAndroid, isApple, isWindows } = parseOS(os);

          return (
            <div>
              <H5>{browser}</H5>
              <Caption className={styles.Description}>
                <i
                  className={classNames(styles.OS, 'fab', {
                    'fa-android': isAndroid,
                    'fa-apple': isApple,
                    'fa-windows': isWindows
                  })}
                />
                {os}
              </Caption>
            </div>
          );
        },
        Header: 'Device & Browser'
      },
      {
        accessor: 'location',
        Cell: ({ row }: any) => {
          const { ip, location } = row?.original;

          return (
            <div>
              <Link to={`https://google.com/maps/search/${location}`}>
                {location}
              </Link>

              <Caption className={styles.Description}>{ip}</Caption>
            </div>
          );
        },
        Header: 'Location'
      },
      {
        accessor: 'isOnline',
        Cell: ({ value }: any) => (
          <Status
            color={value ? Color.GREEN : Color.RED}
            title={value ? 'Online' : 'Offline'}
          />
        ),
        Header: 'Status'
      },
      {
        accessor: 'updatedAt',
        Cell: ({ value }: any) => moment(value).fromNow(),
        Header: 'Date'
      },
      {
        accessor: 'id',
        Cell: ({ value }: any) => (
          <Button
            data-session-id={value}
            color="danger"
            icon="far fa-trash-alt"
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

  return (
    <Wrapper
      actions={
        <Button
          color="danger"
          variant="outlined"
          onClick={handleDeleteAllClick}
        >
          Delete All
        </Button>
      }
      title="Recent Devices"
    >
      <Table columns={columns} data={sessions} />
    </Wrapper>
  );
};

export default Session;
