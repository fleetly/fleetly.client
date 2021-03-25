import classNames from 'classnames';
import moment from 'moment';
import React, { useMemo } from 'react';

// Components
import Button from '@components/Button';
import Table from '@components/Table';

// Interface
import { IInvoice } from '@interfaces/invoice.interface';

// Styles
import styles from './Table.scss';

// Utils
import { getClassName } from '@utils/styles';

interface PropTypes {
  data: IInvoice[];
}

const currentIntl = new Intl.NumberFormat('en-US', {
  currency: 'USD',
  style: 'currency'
});

const BillingTable: React.FC<PropTypes> = ({ data }) => {
  const columns = useMemo(
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
              getClassName('variant', {
                collection: styles,
                value,
                prefix: 'status'
              })
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
        Cell: ({ value }) => currentIntl.format(value),
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

  return <Table columns={columns} data={data} />;
};

export default BillingTable;
