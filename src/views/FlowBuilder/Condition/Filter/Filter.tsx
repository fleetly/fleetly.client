import React from 'react';

// Components
import { Button } from '../../Common';

// Domains
import Item from '../Item';

// Styles
import styles from './Filter.scss';

const FlowBuilderConditionFilter = () => (
  <div className={styles.Root}>
    <div className={styles.List}>
      <Item />
      <Item />
      <Item />
    </div>

    <div className={styles.Actions}>
      <Button color="pink">Add condition</Button>
    </div>
  </div>
);

export default FlowBuilderConditionFilter;
