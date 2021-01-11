import * as React from 'react';

// Containers
import Button from '@components/Button';

// Components
import Item from './components/Item';

// Styles
import styles from './Threads.scss';

// Test
import TEST from './data';

const Threads = () => (
  <div className={styles.Root}>
    <div className={styles.Actions}>
      <Button className={styles.Find} icon="far fa-search" variant="outlined" />
      <Button className={styles.Action} color="primary">
        Open
      </Button>
      <Button className={styles.Action} variant="outlined">
        Close
      </Button>
    </div>
    <div className={styles.Container}>
      {TEST.map((item: any, index: number) => (
        <Item key={index} {...item} />
      ))}
    </div>
  </div>
);

export default Threads;
