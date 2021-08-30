import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';

// Components
import Loader from '@components/Loader';
import Page from '@components/Page';

// Containers
import Plans from '@containers/Plans';

// Fragments
import { BillingCurrent } from './Current';
import { BillingNext } from './Next';
import { BillingHistory } from './History';

// GraphQL
import GET_CURRENT_SUBSCRIPTION from './Billing.gql';

// Interfaces
import { ISubscription } from '@interfaces/subscription.interface';
// Styles
import styles from './Billing.scss';

const Billing: React.FC = () => {
  // Setup
  const { companyId } = useParams<{ companyId: string }>();

  // Data
  const { data, loading } = useQuery<{ currentSubscription: ISubscription }>(
    GET_CURRENT_SUBSCRIPTION,
    {
      variables: { companyId }
    }
  );

  const subscription = data?.currentSubscription;

  return (
    <Page className={styles.Root} title="Billing">
      {!subscription && loading ? (
        <Loader />
      ) : (
        <>
          <BillingCurrent {...subscription!} />
          <BillingNext {...subscription!} />
          <BillingHistory data={subscription!.payments || []} />
        </>
      )}

      <Plans subscription={subscription} />
    </Page>
  );
};

export default Billing;
