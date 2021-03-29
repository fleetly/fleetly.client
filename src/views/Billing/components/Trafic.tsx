import * as React from 'react';

// Components
import { Caption, H4, H5 } from '@components/Typography';

// Styles
import styles from './Trafic.scss';

const Trafic = ({ limit, unitPrice, value }: any) => (
  <div className={styles.Root}>
    <Caption className={styles.Title}>Trafic</Caption>
    <div className={styles.Info}>
      <div className={styles.InfoTitle}>
        <H5>Subscribers</H5>
        <div className={styles.InfoLimit}>
          {value} of {limit}
        </div>
      </div>

      <div className={styles.Text}>{unitPrice}$ per subscriber</div>
    </div>

    <div className={styles.Progress}>
      <progress className={styles.ProgressInfo} max={limit} value={value} />
      <H4 className={styles.ProgressPrice}>{unitPrice}$</H4>
    </div>
  </div>
);

export default Trafic;
