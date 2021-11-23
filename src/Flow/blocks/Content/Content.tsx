import React from 'react';
import { NodeProps } from 'react-flow-renderer';

// Components
import {
  Block,
  BlockActions,
  BlockContent as Content,
  Button,
  Element
} from '@flow/components';

import { BlockContentText } from './components/Text';

export const BlockContent: React.FC<NodeProps> = ({
  data: { elements, title },
  id
}) => (
  <Block
    color="blue"
    icon="fas fa-text"
    id={id}
    subTitle="Content"
    title={title}
  >
    {elements && elements.length > 0 && (
      <Content>
        {elements.map((element: any) => (
          <Element {...element} key={element.id}>
            <BlockContentText {...element} />
          </Element>
        ))}
      </Content>
    )}

    <BlockActions>
      <Button>Add Content</Button>
    </BlockActions>
  </Block>
);
