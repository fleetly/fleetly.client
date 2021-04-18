import React from 'react';
import { Position } from 'react-flow-renderer';

// Components
import Icon from '@components/Icon';
import Card, { CardHeader } from '@components/Card';
import { Handle } from '@views/FlowBuilder/Common';

// Styles
import styles from './Trigger.scss';

const StartTrigger = ({ id }: any) => (
  <Card className={styles.Root}>
    <CardHeader
      actions={
        <Handle
          color="green"
          id="1"
          parentId={id}
          position={Position.Right}
          type="source"
        />
      }
      avatar={<Icon color="green" icon="fas fa-play" />}
      subTitle="Keyword"
      title="Keyword"
    />
  </Card>
);

export default StartTrigger;
