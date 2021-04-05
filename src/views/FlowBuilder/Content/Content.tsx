import React from 'react';
import { NodeProps } from 'react-flow-renderer';

// Components
import { Block, Button } from '../Common';

// Styles
import styles from './Content.scss';

const FlowBuilderContent: React.FC<NodeProps> = ({ id, selected }) => (
  <Block
    icon="fas fa-text"
    id={id}
    selected={selected}
    subTitle="Content"
    title="Send welcome messages"
  >
    <div className={styles.Actions}>
      <Button>Add Content</Button>
    </div>
  </Block>
);

export default FlowBuilderContent;
