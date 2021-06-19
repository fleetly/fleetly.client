import React from 'react';

// Components
import Page from '@components/Page';

// Domains
import CurrentPlan from './Current';
import NextPlan from './Next';
import PaymentHistory from './History';

// Hook
import { useBilling } from './Billing.hooks';

// Styles
import styles from './Billing.scss';

const Billing = () => {
  const { payments, subscription }: any = useBilling();

  return (
    <Page classes={{ container: styles.Root }} title="Billing">
      {subscription && (
        <>
          <CurrentPlan {...subscription} />
          <NextPlan {...subscription} />
          <PaymentHistory data={payments} />
        </>
      )}
    </Page>
  );
};

export default Billing;
