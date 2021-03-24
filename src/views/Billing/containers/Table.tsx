import classNames from 'classnames';
import moment from 'moment';
import * as React from 'react';

// Components
import Button from '@components/Button';
import Table from '@components/Table';

// Styles
import styles from './Table.scss';

const BillingTable: React.FC<Billing.TableProps> = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        accessor: 'status',
        Cell: ({ value }: any) => (
          <i
            className={classNames(
              styles.Status,
              value === 'SUCCESSED'
                ? 'fas fa-check'
                : value === 'PENDING'
                ? 'far fa-ellipsis-h'
                : 'fas fa-ban',
              { [styles.StatusVariantSuccessed]: value === 'SUCCESSED' },
              { [styles.StatusVariantPending]: value === 'PENDING' },
              { [styles.StatusVariantFailed]: value === 'FAILED' }
            )}
          />
        ),
        Header: 'Status'
      },
      {
        accessor: 'createdAt',
        Cell: ({ value }) => moment(value).format('MMM D, YYYY'),
        Header: 'Date'
      },
      {
        accessor: 'id',
        Header: 'ID'
      },
      {
        accessor: 'description',
        Header: 'Description'
      },
      {
        accessor: 'amount',
        Header: 'Amount'
      },
      {
        accessor: 'receipt',
        Cell: () => (
          <Button color="primary" variant="outlined">
            Receipt
          </Button>
        ),
        Header: ''
      }
    ],
    []
  );

  return <Table columns={columns} data={data} />;
};

export default BillingTable;
