import React from 'react';
import { NodeProps } from 'react-flow-renderer';

// Components
import { Text } from '@components/Typography';
import { Block, Button } from '@views/FlowBuilder/Common';

// Styles
import styles from './Start.scss';

const FlowBuilderStart: React.FC<NodeProps> = ({ selected }) => (
  <Block
    color="green"
    icon="fas fa-play"
    selected={selected}
    subTitle="Start"
    title="Starting step"
  >
    <Text className={styles.Description} component="div">
      Flow starts from this block
      <br />
      Add triggers to listen
    </Text>

    <div className={styles.Actions}>
      <Button>Add Trigger</Button>
    </div>
  </Block>
);

export default FlowBuilderStart;
