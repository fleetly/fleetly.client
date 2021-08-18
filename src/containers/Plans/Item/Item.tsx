import classNames from 'classnames';
import React, { useState } from 'react';

// Fleetly
import { PlanType } from '@fleetly/core/interfaces';

// Assets
import enterpriceImage from './assets/enterprice@1x.png';
import enterpriceImage2x from './assets/enterprice@2x.png';
import liteImage from './assets/lite@1x.png';
import liteImage2x from './assets/lite@2x.png';
import proImage from './assets/pro@1x.png';
import proImage2x from './assets/pro@2x.png';

// Components
import Image from '@components/Image';
import { H3, Text } from '@components/Typography';

import Button from '@views/Landing/components/Button';

import Select from './components/Select';

// Interfaces
import { IPlan } from '@interfaces/plan.interface';

// Styles
import styles from './Item.scss';

// Utils
import { formatCurrency } from '@utils/string';
import { getClassName } from '@utils/styles';

export interface PlansItemProps {
  description: string;
  plans: IPlan[];
  type: PlanType;
}

const IMAGE_SET = {
  [PlanType.ENTERPRICE]: {
    '1x': enterpriceImage,
    '2x': enterpriceImage2x
  },
  [PlanType.LITE]: {
    '1x': liteImage,
    '2x': liteImage2x
  },
  [PlanType.PRO]: {
    '1x': proImage,
    '2x': proImage2x
  }
};

const PlansItem: React.FC<PlansItemProps> = ({ description, plans, type }) => {
  // State
  const [currentPlan, selectCurrentPlan] = useState(plans[0]);
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
            src={IMAGE_SET[type]['1x']}
            srcSet={IMAGE_SET[type]}
          />
        </div>

        <H3 className={styles.Type}>{type}</H3>

        <Text className={styles.Description} medium>
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
                  <Button>BUY</Button>
                </div>
              )}
            </div>

            <Text className={styles.Limit} medium>
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
