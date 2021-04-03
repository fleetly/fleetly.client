import * as React from 'react';

// Components
import CurrentPlan from './CurrentPlan';
import NextPlan from './NextPlan';
import PaymentHistory from './History';
import Page from '@components/Page';

// Test
import data from './data';

// Styles
import styles from './Billing.scss';

const Billing = () => (
  <Page classes={{ container: styles.Root }} title="Billing">
    <CurrentPlan data={data.CURRENT_PLAN} />

    <NextPlan />

    <PaymentHistory data={data.PAYMANT_HISTORY} />
  </Page>
);

export default Billing;
