import classNames from 'classnames';
import React from 'react';
import { NodeProps } from 'react-flow-renderer';

// Components
import Card, { CardHeader } from '@components/Card';
import { Text } from '@components/Typography';

// Styles
import styles from './Start.scss';

const FlowBuilderStart: React.FC<NodeProps> = ({ selected }) => (
  <Card
    className={classNames(styles.Root, { [styles.RootIsSelected]: selected })}
  >
    <CardHeader
      avatar={<div className={styles.Avatar} />}
      subTitle="Start"
      title="Starting step"
    />

    <Text className={styles.Description} component="div">
      Flow starts from this block
      <br />
      Add triggers to listen
    </Text>

    <button className={styles.Button}>Add Trigger</button>
  </Card>
);

export default FlowBuilderStart;
