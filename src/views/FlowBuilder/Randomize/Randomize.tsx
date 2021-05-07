import React from 'react';
import { NodeProps } from 'react-flow-renderer';

// Components
import { Text } from '@components/Typography';
import { Block, BlockActions, Button } from '../Common';

import Variant from './components/Variant';

// Styles
import styles from './Randomize.scss';

const FlowBuilderRandomize: React.FC<NodeProps> = ({ id, selected }) => (
  <Block
    color="purple"
    icon="fas fa-random"
    id={id}
    hasSource={false}
    selected={selected}
    subTitle="Randomize"
    title="A/B test"
  >
    <Text className={styles.Description} component="div">
      The block will split flow
    </Text>

    <div className={styles.List}>
      <Variant name="A" id="1" />
      <Variant name="B" id="2" />
      <Variant name="C" id="3" />
    </div>

    <BlockActions>
      <Button>Add Variant</Button>
    </BlockActions>
  </Block>
);

export default FlowBuilderRandomize;
