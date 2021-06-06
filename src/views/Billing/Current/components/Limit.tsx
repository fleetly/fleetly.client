import React from 'react';

// Components
import { H4, Text } from '@components/Typography';

// Styles
import styles from './Limit.scss';

// Utils
import { formatCurrency } from '@utils/string';

interface PropTypes {
  limit?: number;
  origin?: {
    title?: string;
    unit?: string;
  };
  chunkPrice?: number;
  chunkSize?: number;
}

const BillingCurrentLimit: React.FC<PropTypes> = ({
  limit,
  origin,
  chunkPrice,
  chunkSize
}: any) => {
  const progress = (chunkSize / limit) * 100;

  return (
    <div className={styles.Root}>
      <div className={styles.Content}>
        <div className={styles.Info}>
          <H4>{origin?.title}</H4>

          <Text className={styles.Counter}>
            {chunkSize} of {limit}
          </Text>

          <Text>
            {formatCurrency(chunkPrice)} per {origin?.title}
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

      <H4>{formatCurrency(chunkPrice)}</H4>
    </div>
  );
};

export default BillingCurrentLimit;
