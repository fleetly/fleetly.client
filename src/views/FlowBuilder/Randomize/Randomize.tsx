import React from 'react';
import { NodeProps } from 'react-flow-renderer';

// Components
import { Text } from '@components/Typography';
import { Block, Button } from '@views/FlowBuilder/Common';

// Styles
import styles from './Randomize.scss';

const FlowBuilderRandomize: React.FC<NodeProps> = ({ selected }) => (
  <Block
    color="purple"
    icon="fas fa-random"
    selected={selected}
    subTitle="Randomize"
    title="A/B test"
  >
    <Text className={styles.Description} component="div">
      The block will split flow
    </Text>

    <div className={styles.Actions}>
      <Button color="purple">A - 75%</Button>
      <Button color="purple">B - 25%</Button>
      <Button>Add Variant</Button>
    </div>
  </Block>
);

export default FlowBuilderRandomize;
