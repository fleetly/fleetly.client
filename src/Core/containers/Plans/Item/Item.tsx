import classNames from 'classnames';
import React, { useState } from 'react';

// Fleetly
import { PlanType } from '@fleetly/core/interfaces';

// Components
import Image from '@components/Image';
import { H3, Text } from '@components/Typography';

import Select from './components/Select';

// Data
import { PLANS_IMAGE_SET } from '../Plans.data';

// Interfaces
import { IPlan } from '@interfaces/plan.interface';
import { ISubscription } from '@interfaces/subscription.interface';

// Styles
import styles from './Item.scss';

// Views
import Button from 'Landing/components/Button';

// Utils
import { formatCurrency } from '@utils/string';
import { getClassName } from '@utils/styles';

export interface PlansItemProps {
  description: string;
  onClick(event: React.SyntheticEvent<HTMLButtonElement>): void;
  plans: IPlan[];
  subscription?: ISubscription;
  type: PlanType;
}

const PlansItem: React.FC<PlansItemProps> = ({
  description,
  onClick,
  plans,
  subscription,
  type
}) => {
  // State
  const [currentPlan, selectCurrentPlan] = useState(
    subscription
      ? plans.find(({ id }) => id === subscription.next.plan.id) || plans[0]
      : plans[0]
  );

  const isFree = type === PlanType.LITE;

  return (
    <div
      className={classNames(
        styles.Root,
        getClassName('color', { collection: styles, value: type })
      )}
    >
      <div className={styles.Background} />

      <div className={styles.Content}>
        <div className={styles.Cover}>
          <Image
            alt={type}
            className={styles.Image}
            src={PLANS_IMAGE_SET[type]['1x']}
            srcSet={PLANS_IMAGE_SET[type]}
          />
        </div>

        <H3 className={styles.Type}>{type}</H3>

        <Text className={styles.Description} weight="medium">
          {description}
        </Text>

        {currentPlan && (
          <>
            <div
              className={classNames(styles.Buy, {
                [styles.BuyVariantFree]: isFree,
                [styles.BuyVariantPaid]: !isFree
              })}
            >
              <H3 className={styles.Price}>
                {isFree
                  ? 'FREE'
                  : formatCurrency(currentPlan.price, { fraction: false })}
              </H3>

              {!isFree && (
                <div className={styles.Button}>
                  <Button data-plan-id={currentPlan.id} onClick={onClick}>
                    {subscription?.next.plan.id === currentPlan.id
                      ? 'CANCEL'
                      : subscription?.next.plan.type !== PlanType.LITE
                      ? 'CHANGE'
                      : 'BUY'}
                  </Button>
                </div>
              )}
            </div>

            <Text className={styles.Limit} weight="medium">
              {currentPlan.title}
            </Text>

            <Select
              onSelect={selectCurrentPlan as any}
              plans={plans}
              value={currentPlan}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default PlansItem;
