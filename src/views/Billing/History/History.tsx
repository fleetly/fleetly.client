import * as React from 'react';

// Components
import { Wrapper } from '@components/Page';

// Containers
import Table from './containers/Table';

const PaymentHistory = ({ data }: any) => (
  <Wrapper title="Payment History">
    <Table data={data} />
  </Wrapper>
);

export default PaymentHistory;
