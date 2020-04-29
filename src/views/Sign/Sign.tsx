import * as React from 'react';

// Components
import { H1, H2 } from '@components/Typography';

// Styles
import styles from './Sign.scss';

const Sign = () => (
  <div className={styles.Root}>
    <div className={styles.Wrapper}>
      <div className={styles.Content}>
        <H2 className={styles.Welcome}>Welcome to</H2>
        <H1 className={styles.Title}>Fleetly</H1>
      </div>
    </div>
  </div>
);

export default Sign;
