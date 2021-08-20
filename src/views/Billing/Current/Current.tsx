import React, { useMemo } from 'react';

// Fleetly
import { PlanType } from '@fleetly/core/interfaces';

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

const BillingCurrent: React.FC<ISubscription> = ({ plan }) => {
  // Memo
  const color: Color = useMemo(() => {
    switch (plan.type) {
      case PlanType.ENTERPRICE:
        return 'purple';
      case PlanType.LITE:
        return 'green';
      case PlanType.PRO:
        return 'blue';
    }
  }, [plan.type]);

  return (
    <Wrapper title="Current Plan">
      <Card>
        <CardHeader
          avatar={<Icon color={color} icon="fad fa-rocket" />}
          classes={{ content: styles.Content }}
          subTitle={plan.title}
          title={plan.type}
        />

        <CardHr />

        <div className={styles.Features}>
          {FEATURES.map(({ icon, title }: any, index: number) => (
            <Feature color={color} key={index} icon={icon} title={title} />
          ))}
        </div>
      </Card>
    </Wrapper>
  );
};

export default BillingCurrent;
