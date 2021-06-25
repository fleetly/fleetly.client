import React from 'react';

// Components
import Button from '@components/Button';
import Card, { CardHeader, CardHr } from '@components/Card';
import Icon from '@components/Icon';
import { Wrapper } from '@components/Page';
import { Caption } from '@components/Typography';

import Feature from './components/Feature';
import Traffic from './components/Traffic';

// Data
import { FEATURES } from '../Billing.data';

// Interfaces
import { ISubscription } from '@interfaces/subscription.interface';

// Styles
import styles from './Current.scss';

const BillingCurrent: React.FC<ISubscription> = ({ plan }) => (
  <Wrapper title="Current Plan">
    <Card>
      <CardHeader
        actions={
          <Button color="primary" variant="outlined">
            Get Usage Report
          </Button>
        }
        avatar={<Icon icon="fad fa-rocket" />}
        classes={{ content: styles.Content }}
        subTitle={plan.title}
        title={plan.type}
      />

      <CardHr />

      <div className={styles.Features}>
        {FEATURES.map(({ icon, title }: any, index: number) => (
          <Feature key={index} icon={icon} title={title} />
        ))}
      </div>

      {plan.traffics && plan.traffics.length > 0 && (
        <>
          <Caption className={styles.Title}>Traffics</Caption>

          <CardHr />

          <div className={styles.Traffics}>
            {plan.traffics.map((traffic) => (
              <Traffic {...traffic} key={traffic.id} />
            ))}
          </div>
        </>
      )}
    </Card>
  </Wrapper>
);

export default BillingCurrent;
