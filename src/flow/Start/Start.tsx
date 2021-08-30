import React from 'react';
import { NodeProps } from 'react-flow-renderer';

// Fleetly
import { ElementType } from '@fleetly/flow/dist/common/interfaces';

// Components
import { Text } from '@components/Typography';
import { Block, BlockActions, BlockContent, Button } from '../Common';

import StartKeyword from './components/Keyword';

// Interfaces
import { IElement } from '@interfaces/flow.interface';

// Styles
import styles from './Start.scss';

const ELEMENT: any = {
  [ElementType.START_KEYWORD]: StartKeyword
};

const FlowBuilderStart: React.FC<NodeProps<{
  elements: IElement[];
  title: string;
}>> = ({ id, data: { elements, title = 'Starting step' }, selected }) => (
  <Block
    color="green"
    icon="fas fa-play"
    id={id}
    hasTarget={false}
    hasSource={false}
    selected={selected}
    subTitle="Start"
    title={title}
  >
    <Text className={styles.Description} component="div">
      Flow starts from this block
      <br />
      Add triggers to listen
    </Text>

    <BlockContent>
      {elements.map((element) => {
        const Component = ELEMENT[element.type];

        return (
          <Component
            key={element.id}
            {...element.payload}
            id={element.id}
            blockId={id}
          />
        );
      })}
    </BlockContent>

    <BlockActions>
      <Button>Add Trigger</Button>
    </BlockActions>
  </Block>
);

export default FlowBuilderStart;
