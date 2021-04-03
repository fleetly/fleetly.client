import * as React from 'react';

// Components
import { Wrapper } from '@components/Page';

// Containers
import Table from './containers/Table';

// Styles
import styles from './History.scss';

const BillingHistory = ({ data }: any) => (
  <Wrapper classes={{ root: styles.Root }} title="Payment History">
    <Table data={data} />
  </Wrapper>
);

export default BillingHistory;
