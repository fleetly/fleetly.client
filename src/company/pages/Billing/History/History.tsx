import moment from 'moment';
import React, { useMemo } from 'react';

// Fleetly
import { PaymentType } from '@fleetly/core/interfaces';

// Components
import Button from '@components/Button';
import { Wrapper } from '@components/Page';
import Table from '@components/Table';

import Amount from './components/Amount';
import Status from './components/Status';

// Interfaces
import { IPayment } from '@interfaces/payment.interface';

// Styles
import styles from './History.scss';

export interface BillingHistoryProps {
  readonly data: IPayment[];
}

export const BillingHistory: React.FC<BillingHistoryProps> = ({ data }) => {
  // Memo
  const columns = useMemo(
    () => [
      {
        accessor: 'status',
        Cell: Status,
        Header: 'Status',
        maxWidth: 80
      },
      {
        accessor: 'createdAt',
        Cell: ({ value }: any) => moment(value).format('MMM D, YYYY'),
        Header: 'Date',
        maxWidth: 160
      },
      {
        accessor: 'orderId',
        Header: 'Order ID',
        maxWidth: 160
      },
      {
        accessor: 'type',
        Cell: ({ value }: any) =>
          value === PaymentType.SUBSCRIPTION
            ? 'Monthly subscription payment'
            : 'One-off payment',
        Header: 'Description'
      },
      {
        accessor: 'amount',
        Cell: ({ row, value }: any) => (
          <Amount amount={value} tax={row.original.tax} />
        ),
        Header: 'Amount',
        maxWidth: 160
      },
      {
        accessor: 'receiptUrl',
        Cell: ({ value }: any) => (
          <Button
            color="primary"
            icon="far fa-receipt"
            to={value}
            variant="outlined"
          />
        ),
        Header: 'Receipt',
        maxWidth: 80
      }
    ],
    []
  );

  return (
    <Wrapper className={styles.Root} title="Payment History">
      <Table columns={columns} data={data} />
    </Wrapper>
  );
};
