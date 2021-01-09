import * as React from 'react';

// Containers
import Button from '@components/Button';

// Components
import { Wrapper } from '@components/Page';
import Tabs, { Tab } from '@components/Tabs';
import Item from './components/Item';

// Styles
import styles from './Thread.scss';

// Test
import TEST from './data';

const Thread = () => {
  return (
    <Wrapper
      actions={
        <div className={styles.Actions}>
          <Button
            className={styles.Find}
            icon="far fa-search"
            variant="outlined"
          />
          <Button className={styles.Action} color="primary">
            Open
          </Button>
          <Button className={styles.Action} variant="outlined">
            Close
          </Button>
        </div>
      }
      classes={{ root: styles.Root, container: styles.Container }}
    >
      {TEST.map((item: any, index: number) => (
        <Item key={index} {...item} />
      ))}
    </Wrapper>
  );
};

export default Thread;
