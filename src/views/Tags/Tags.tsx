import * as React from 'react';

// Components
import { H3 } from '@components/Typography';

// Containers
import Table from './containers/Table';

// Styles
import styles from './Tags.scss';

const Tags = () => (
  <div className={styles.Root}>
    <div className={styles.Header}>
      <H3>Tags</H3>
    </div>

    <div className={styles.Container}>
      <Table />
    </div>
  </div>
);

export default Tags;
