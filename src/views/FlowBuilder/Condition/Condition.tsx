import React from 'react';
import { NodeProps } from 'react-flow-renderer';

// Components
import { Block, Button } from '../Common';

// Styles
import styles from './Condition.scss';

// TEST
import List from './components/List';

const FlowBuilderCondition: React.FC<NodeProps> = ({ id, selected }) => (
  <Block
    color="pink"
    icon="fas fa-filter"
    id={id}
    selected={selected}
    subTitle="Condition"
    title="Check customer info"
  >
    <List />
    <div className={styles.Actions}>
      <Button>Add Condition</Button>
    </div>
  </Block>
);

export default FlowBuilderCondition;
