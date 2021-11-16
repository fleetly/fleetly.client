import React from 'react';

// Components
import { Block, BlockActions, BlockContent, Button } from '@flow/components';

export const BlockStart: React.FC = () => (
  <Block
    color="green"
    icon="fas fa-play"
    hasTarget={false}
    hasSource={false}
    subTitle="Start"
    title="Start"
  >
    <BlockContent>123</BlockContent>

    <BlockActions>
      <Button>Add Trigger</Button>
    </BlockActions>
  </Block>
);
