import React from 'react';

// Components
import Page from '@components/Page';

// Domains
import CurrentPlan from './Current';
import NextPlan from './Next';
import PaymentHistory from './History';

// Hook
import { useBilling } from './Billing.hooks';

// Test
import data from './data';

// Styles
import styles from './Billing.scss';

const Billing = () => {
  const { date } = useBilling();

  return (
    <Page classes={{ container: styles.Root }} title="Billing">
      <CurrentPlan data={date} />
      <NextPlan data={data.CURRENT_PLAN} />
      <PaymentHistory data={data.PAYMANT_HISTORY} />
    </Page>
  );
};

export default Billing;
