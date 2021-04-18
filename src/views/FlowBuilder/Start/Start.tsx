import React from 'react';
import { NodeProps } from 'react-flow-renderer';

// Components
import Trigger from './components/Trigger';
import { Text } from '@components/Typography';
import { Block, Button } from '@views/FlowBuilder/Common';

// Styles
import styles from './Start.scss';

const FlowBuilderStart: React.FC<NodeProps> = ({ id, selected }) => (
  <Block
    color="green"
    icon="fas fa-play"
    id={id}
    hasTarget={false}
    hasSource={false}
    selected={selected}
    subTitle="Start"
    title="Starting step"
  >
    <Text className={styles.Description} component="div">
      Flow starts from this block
      <br />
      Add triggers to listen
    </Text>

    <div className={styles.Triggers}>
      <Trigger id={id} />
      <Trigger id={id} />
      <Trigger id={id} />
    </div>

    <div className={styles.Actions}>
      <Button>Add Trigger</Button>
    </div>
  </Block>
);

export default FlowBuilderStart;
