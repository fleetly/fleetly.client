import * as React from 'react';

// Components
import Page, { Wrapper } from '@components/Page';

// Containers
import Table from './containers/Table';

// Test
import TEST from './DataTest';

const Billing = () => (
  <Page title="Billing">
    <Wrapper title="Payment History">
      <Table data={TEST} />
    </Wrapper>
  </Page>
);

export default Billing;
