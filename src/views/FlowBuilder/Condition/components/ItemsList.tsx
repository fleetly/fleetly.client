import React from 'react';

// Components
import Item from './Item';
import { Button } from '../../Common';
import { Text } from '@components/Typography';

// Styles
import styles from './ItemsList.scss';

const ItemsList = () => (
  <div className={styles.Root}>
    <Text> Condition #</Text>
    <Item />
    <Item />
    <Item />

    <div className={styles.Action}>
      <Button color="pink">Add Condition</Button>
    </div>
  </div>
);

export default ItemsList;
