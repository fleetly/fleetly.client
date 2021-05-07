import React from 'react';
import { NodeProps } from 'react-flow-renderer';

// Components
import { Block, Button } from '../Common';

// Interfaces
import { IElement } from '@interfaces/flow.interface';

// Styles
import styles from './Content.scss';

const FlowBuilderContent: React.FC<NodeProps<{
  elements: IElement[];
  title: string;
}>> = ({ id, data: { elements, title = 'Send message' }, selected }) => (
  <Block
    icon="fas fa-text"
    id={id}
    selected={selected}
    subTitle="Content"
    title={title}
  >
    <div className={styles.Actions}>
      <Button>Add Content</Button>
    </div>
  </Block>
);

export default FlowBuilderContent;
