import React from 'react';
import { NodeProps } from 'react-flow-renderer';

// Components
import {
  Block,
  BlockActions,
  BlockContent,
  Button,
  Element
} from '@flow/components';

// Elements
import { BlockStartKeyword } from './components/Keyword';

export const BlockStart: React.FC<NodeProps> = ({
  data: { elements, title },
  id
}) => (
  <Block
    color="green"
    icon="fas fa-play"
    id={id}
    hasTarget={false}
    hasSource={false}
    subTitle="Start"
    title={title}
  >
    {elements && elements.length > 0 && (
      <BlockContent>
        {elements.map((element: any) => (
          <Element {...element} key={element.id}>
            <BlockStartKeyword {...element} />
          </Element>
        ))}
      </BlockContent>
    )}

    <BlockActions>
      <Button>Add Trigger</Button>
    </BlockActions>
  </Block>
);
