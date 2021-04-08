import moment from 'moment';
import React, { useMemo } from 'react';

// Components
import Button from '@components/Button';
import Icon from '@components/Icon';
import { Wrapper } from '@components/Page';
import Table from '@components/Table';

// Styles
import styles from './History.scss';

// Utils
import { formatCurrency } from '@utils/string';

const BillingHistory = ({ data }: any) => {
  const columns = useMemo(
    () => [
      {
        accessor: 'status',
        Cell: ({ value }: any) => (
          <Icon
            color={
              value === 'SUCCESSED'
                ? 'green'
                : value === 'PENDING'
                ? 'blue'
                : 'red'
            }
            icon={
              value === 'SUCCESSED'
                ? 'fas fa-check'
                : value === 'PENDING'
                ? 'far fa-ellipsis-h'
                : 'fas fa-ban'
            }
            variant="outlined"
          />
        ),
        Header: 'Status',
        maxWidth: 80
      },
      {
        accessor: 'createdAt',
        Cell: ({ value }: any) => moment(value).format('MMM D, YYYY'),
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
        Cell: ({ value }) => formatCurrency(value),
        Header: 'Amount'
      },
      {
        accessor: 'receipt',
        Cell: () => (
          <Button color="primary" variant="outlined" icon="far fa-receipt" />
        ),
        Header: ''
      }
    ],
    []
  );

  return (
    <Wrapper classes={{ root: styles.Root }} title="Payment History">
      <Table columns={columns} data={data} />
    </Wrapper>
  );
};

export default BillingHistory;
