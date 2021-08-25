import React from 'react';
import { NodeProps } from 'react-flow-renderer';

// Components
import { Block, BlockActions, BlockContent, Button } from '../Common';
import Text from './components/Text';

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
      <Text
        id="test"
        text="You have successfully subscribed to Page Name! The next post is coming soon, stay tuned!"
      />
    </BlockContent>

    <BlockActions>
      <Button>Add Content</Button>
    </BlockActions>
  </Block>
);

export default FlowBuilderContent;
