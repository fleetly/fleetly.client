import React from 'react';
import { NodeProps } from 'react-flow-renderer';

// Components
import Element from './components/Element';
import { Text } from '@components/Typography';
import { Block, Button } from '../Common';

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
      <Element name="A" id="1" />
      <Element name="B" id="2" />
      <Element name="C" id="3" />
    </div>

    <div className={styles.Actions}>
      <Button>Add Variant</Button>
    </div>
  </Block>
);

export default FlowBuilderRandomize;
