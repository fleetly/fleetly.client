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

const IMAGE_SET = {
  [PlanType.ENTERPRCIE]: {
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
        <div className={styles.Cover}>
          <Image
            alt={type}
            className={styles.Image}
            src={IMAGE_SET[type]['1x']}
            srcSet={IMAGE_SET[type]}
          />
        </div>

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
