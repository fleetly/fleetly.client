import * as React from 'react';

// Containers
import Button from '@components/Button';
import { AllClosed } from '@components/Empty';

// Components
import Item from './components/Item';

// Styles
import styles from './Threads.scss';

// Test
import TEST from './data';

const Threads = () => (
  <div className={styles.Root}>
    <div className={styles.Actions}>
      <div className={styles.Search}>
        <Button
          className={styles.SearchTrigger}
          classes={{ root: styles.Find, icon: styles.FindIcon }}
          icon="far fa-search"
          variant="outlined"
        />
      </div>

      <div className={styles.Status}>
        <Button className={styles.Action} color="primary">
          Opened
        </Button>

        <Button className={styles.Action} variant="outlined">
          Closed
        </Button>
      </div>
    </div>

    <div className={styles.Container}>
      {1 > 2 ? (
        TEST.map((item: any, index: number) => <Item key={index} {...item} />)
      ) : (
        <AllClosed />
      )}
    </div>
  </div>
);

export default Threads;
