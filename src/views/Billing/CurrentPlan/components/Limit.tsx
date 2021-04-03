import * as React from 'react';

// Components
import { H4, H5 } from '@components/Typography';

// Styles
import styles from './Limit.scss';

const BillingCurrentPlanLimit = ({
  limit,
  title,
  unit,
  unitPrice,
  value
}: any) => {
  const progress = (value / limit) * 100;

  return (
    <div className={styles.Root}>
      <div className={styles.Info}>
        <div className={styles.InfoTitle}>
          <H5>{title}</H5>
          <div className={styles.InfoLimit}>
            {value} of {limit}
          </div>
        </div>

        <div className={styles.Text}>
          {unitPrice}$ per {unit}
        </div>
      </div>

      <div className={styles.ProgressInfo}>
        <div className={styles.ProgressScale}>
          <div className={styles.Scale} />
          <div className={styles.Progress} style={{ width: `${progress}%` }} />
        </div>

        <H4 className={styles.ProgressPrice}>{unitPrice}$</H4>
      </div>
    </div>
  );
};

export default BillingCurrentPlanLimit;
