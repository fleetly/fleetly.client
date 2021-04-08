import React from 'react';

// Components
import { H4, Text } from '@components/Typography';

// Styles
import styles from './Limit.scss';

// Utils
import { formatCurrency } from '@utils/string';

interface PropTypes {
  limit: number;
  title: string;
  unit: number;
  unitPrice: number;
  value: number;
}

const BillingCurrentLimit: React.FC<PropTypes> = ({
  limit,
  title,
  unit,
  unitPrice,
  value
}: any) => {
  const progress = (value / limit) * 100;

  return (
    <div className={styles.Root}>
      <div className={styles.Content}>
        <div className={styles.Info}>
          <H4>{title}</H4>

          <Text className={styles.Counter}>
            {value} of {limit}
          </Text>

          <Text>
            {formatCurrency(unitPrice)} per {unit}
          </Text>
        </div>

        <div className={styles.Progress}>
          <div className={styles.ProgressCover} />
          <div
            className={styles.ProgressBar}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <H4>{formatCurrency(unitPrice)}</H4>
    </div>
  );
};

export default BillingCurrentLimit;
