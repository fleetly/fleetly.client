import React from 'react';
import { NodeProps } from 'react-flow-renderer';

// Components
import { Block, Button } from '../Common';

// Styles
import styles from './Action.scss';

const FlowBuilderAction: React.FC<NodeProps> = ({ selected }) => (
  <Block
    color="yellow"
    icon="fas fa-bolt"
    selected={selected}
    subTitle="Action"
    title="Set customer as favorite"
  >
    <div className={styles.Actions}>
      <Button>Add Action</Button>
    </div>
  </Block>
);

export default FlowBuilderAction;
