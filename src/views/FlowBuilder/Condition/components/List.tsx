import React from 'react';

// Conponents
import ItemsList from './ItemsList';
import { Button } from '../../Common';

// Styles
import styles from './List.scss';

// tslint:disable-next-line: jsx-key
const TEST = [<ItemsList />, <ItemsList />, <ItemsList />];

const List = () => (
  <div className={styles.Root}>
    <div className={styles.List}>
      {TEST.map((item, index) => (
        <div className={styles.Item} key={index}>
          {item}
        </div>
      ))}
    </div>

    <div className={styles.Action}>
      <Button color="pink">Else if</Button>
    </div>
  </div>
);

export default List;
