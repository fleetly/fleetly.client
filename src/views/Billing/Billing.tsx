import * as React from 'react';

// Components
import Page, { Wrapper } from '@components/Page';

// Containers
import Table from './containers/Table';

const TEST = [
  {
    createdAt: new Date(),
    id: '1',
    description: 'test',
    status: 'SUCCESSED',
    amount: 200,
    accessor: 'test'
  },
  {
    createdAt: new Date(),
    id: '2',
    description: 'test 2',
    status: 'PENDING',
    amount: 200,
    accessor: 'test 2'
  },
  {
    createdAt: new Date(),
    id: '2',
    description: 'test 2',
    status: 'FAILED',
    amount: 200,
    accessor: 'test 2'
  }
];

const Billing = () => (
  <Page title="Billing">
    <Wrapper title="Payment History">
      <Table data={TEST} />
    </Wrapper>
  </Page>
);

export default Billing;
