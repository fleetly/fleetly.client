import React, { useMemo } from 'react';

// Fleetly
import { PlanType } from '@fleetly/core/interfaces';

// Components
import Card, { CardHeader, CardHr } from '@components/Card';
import Icon from '@components/Icon';
import { Wrapper } from '@components/Page';
import { Text } from '@components/Typography';

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

        {plan.features && plan.features.length > 0 && (
          <div className={styles.Features}>
            {plan.features.map((feature, index) => (
              <div className={styles.Feature} key={index}>
                <Icon
                  className={styles.Icon}
                  color={color}
                  icon="fas fa-check"
                  variant="outlined"
                />

                <Text>{feature}</Text>
              </div>
            ))}
          </div>
        )}
      </Card>
    </Wrapper>
  );
};

export default BillingCurrent;
