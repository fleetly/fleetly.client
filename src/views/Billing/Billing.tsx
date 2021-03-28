import * as React from 'react';

// Components
import CurrentPlan from './components/CurrentPlan';
import Page, { Wrapper } from '@components/Page';

// Containers
import Table from './containers/Table';

// Test
import CurrentTest from './TestInfo/CurrentPlan';
import PaymentTest from './TestInfo/PaymentHistory';

// Styles
import styles from './Billing.scss';

const Billing = () => (
  <div className={styles.Root}>
    <div className={styles.Header}>
      <Wrapper classes={{ container: styles.CurrentPlan }} title="Current Plan">
        <CurrentPlan data={CurrentTest} />
      </Wrapper>

      <Wrapper classes={{ root: styles.NextPlan }} title="Next Plan">
        12345
      </Wrapper>
    </div>

    <Page title="Billing">
      <Wrapper title="Payment History">
        <Table data={PaymentTest} />
      </Wrapper>
    </Page>
  </div>
);

export default Billing;
