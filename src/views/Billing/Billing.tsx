import React from 'react';

// Components
import Page from '@components/Page';

// Domains
import CurrentPlan from './CurrentPlan';
import NextPlan from './NextPlan';
import PaymentHistory from './History';

// Test
import data from './data';

// Styles
import styles from './Billing.scss';

const Billing = () => (
  <Page classes={{ container: styles.Root }} title="Billing">
    <CurrentPlan data={data.CURRENT_PLAN} />

    <NextPlan data={data.CURRENT_PLAN} />

    <PaymentHistory data={data.PAYMANT_HISTORY} />
  </Page>
);

export default Billing;
