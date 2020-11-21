import * as React from 'react';

// Container
import Source from './Source';
import SecretKey from './SecretKey';
import Webhook from './Webhook';

// Styles
import styles from './Information.scss';

const Information = () => (
  <div className={styles.Root}>
    <Source />
    <SecretKey />
    <Webhook />
  </div>
);

export default Information;
