import React from 'react';

// Components
import Card, { CardHeader, CardHr } from '@components/Card';
import Icon from '@components/Icon';
import { Wrapper } from '@components/Page';

import Feature from './components/Feature';

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
    </Card>
  </Wrapper>
);

export default BillingCurrent;
