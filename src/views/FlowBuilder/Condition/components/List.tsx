import React from 'react';

// Conponents
import ItemsList from './ItemsList';
import { Button } from '../../Common';

// Styles
import styles from './List.scss';

const TEST = [<ItemsList />, <ItemsList />, <ItemsList />];

const List = () => (
  <div className={styles.Root}>
    <div className={styles.List}>
      {TEST.map((item) => (
        <div className={styles.Item}>{item}</div>
      ))}
    </div>

    <div className={styles.Action}>
      <Button color="pink">Else if</Button>
    </div>
  </div>
);

export default List;
