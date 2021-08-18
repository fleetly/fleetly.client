import classNames from 'classnames';
import React, { useState } from 'react';

// Fleetly
import { PlanType } from '@fleetly/core/interfaces';

// Components
import { H2, H3, Text } from '@components/Typography';
import Button from '@views/Landing/components/Button';

import Select from './components/Select';

// Styles
import styles from './Item.scss';

// Utils
import { formatCurrency } from '@utils/string';
import { getClassName } from '@utils/styles';

export interface PlansItemProps {
  description: string;
  title: string;
  type: PlanType;
  variants: {
    id: string;
    price: number;
    title: string;
  }[];
}

const PlansItem: React.FC<PlansItemProps> = ({
  description,
  title,
  type,
  variants
}) => {
  // State
  const [currentPlan, selectCurrentPlan] = useState(variants[0]);
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
        <div className={styles.Cover}>123</div>

        <H3 className={styles.Type}>{title}</H3>

        <Text className={styles.Description} medium size="large">
          {description}
        </Text>

        <div
          className={classNames(styles.Buy, {
            [styles.BuyVariantFree]: isFree,
            [styles.BuyVariantPaid]: !isFree
          })}
        >
          <H2 className={styles.Price}>
            {isFree
              ? 'FREE'
              : formatCurrency(currentPlan.price, { fraction: false })}
          </H2>

          {!isFree && (
            <div className={styles.Button}>
              <Button>BUY</Button>
            </div>
          )}
        </div>

        <Text className={styles.Limit} medium size="large">
          {currentPlan.title}
        </Text>

        <Select
          onSelect={selectCurrentPlan as any}
          plans={variants}
          value={currentPlan}
        />
      </div>
    </div>
  );
};

export default PlansItem;
