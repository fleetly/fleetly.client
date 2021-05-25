import React from 'react';
import { NodeProps } from 'react-flow-renderer';

// Components
import { Block, BlockActions, BlockContent, Button } from '../Common';
import Text from './components/Text';

import List from '../Condition/components/List';

// Interfaces
import { IElement } from '@interfaces/flow.interface';

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
    <BlockContent>
      <List />
      <Text />
    </BlockContent>

    <BlockActions>
      <Button>Add Content</Button>
    </BlockActions>
  </Block>
);

export default FlowBuilderContent;
