import React from 'react';

// Components
import { H4, Text } from '@components/Typography';

// Interface
import { ITraffic } from '@interfaces/traffic.interface';

// Styles
import styles from './Traffic.scss';

// Utils
import { formatCurrency } from '@utils/string';

export const BillingCurrentTraffic: React.FC<ITraffic> = ({
  chunkPrice,
  chunkSize,
  limit = 0,
  title,
  unit,
  value
}) => (
  <div className={styles.Root}>
    <div className={styles.Header}>
      <H4 className={styles.Title}>
        {title}
        <Text className={styles.Value}>{`${value} of ${limit}`}</Text>
      </H4>

      <Text className={styles.Unit}>{`${formatCurrency(
        chunkPrice
      )} per ${chunkSize} ${unit}`}</Text>
    </div>

    <div className={styles.Progress}>
      <div
        className={styles.Bar}
        style={{ width: `${(value / limit) * 100}%` }}
      />
    </div>
  </div>
);
