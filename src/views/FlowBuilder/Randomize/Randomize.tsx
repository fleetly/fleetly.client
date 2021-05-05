import React from 'react';
import { NodeProps, Position } from 'react-flow-renderer';

// Components
import { Text } from '@components/Typography';
import { Block, Button, Handle } from '../Common';

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

    <div className={styles.Actions}>
      <Button color="purple">
        A - 75%
        <Handle
          id="1"
          blockId={id}
          className={styles.Handle}
          color="purple"
          position={Position.Right}
          type="source"
        />
      </Button>

      <Button color="purple">
        B - 25%
        <Handle
          id="2"
          blockId={id}
          className={styles.Handle}
          color="purple"
          position={Position.Right}
          type="source"
        />
      </Button>

      <Button>Add Variant</Button>
    </div>
  </Block>
);

export default FlowBuilderRandomize;
