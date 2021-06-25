import React, { useMemo } from 'react';

// Components
import { H4, Text } from '@components/Typography';

// Interfaces
import { IPlanTraffic } from '@interfaces/plan.interface';

// Styles
import styles from './Traffic.scss';

// Utils
import { formatCurrency } from '@utils/string';

const BillingCurrentLimit: React.FC<IPlanTraffic> = ({
  chunkPrice,
  chunkSize,
  limit,
  origin
}) => {
  const value = useMemo(() => (chunkSize / limit) * 100, [chunkSize, limit]);

  return (
    <div className={styles.Root}>
      <div className={styles.Content}>
        <div className={styles.Info}>
          <H4>{origin.title}</H4>

          <Text className={styles.Counter}>
            {chunkSize} of {limit}
          </Text>

          <Text>
            {formatCurrency(chunkPrice)} per {origin.unit}
          </Text>
        </div>

        <div className={styles.Progress}>
          <div className={styles.ProgressCover} />
          <div className={styles.ProgressBar} style={{ width: `${value}%` }} />
        </div>
      </div>

      <H4>{formatCurrency(chunkPrice)}</H4>
    </div>
  );
};

export default BillingCurrentLimit;
