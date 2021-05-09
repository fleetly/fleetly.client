import React from 'react';
import { Position } from 'react-flow-renderer';

// Components
import { Button, Handle } from '../../Common';
import { Text } from '@components/Typography';

// Styles
import styles from './Description.scss';

const FlowBuilderContentDescription = () => (
  <div className={styles.Root}>
    <Text className={styles.Description} size="small">
      You have successfully subscribed to Page Name ! The next post is coming
      soon, stay tuned!
    </Text>

    <div className={styles.Actions}>
      <Button color="purple">
        Button 1
        <Handle
          blockId="1"
          className={styles.Handle}
          color="purple"
          id="1"
          position={Position.Right}
          type="source"
        />
      </Button>

      <Button color="purple">
        Button 1
        <Handle
          blockId="1"
          className={styles.Handle}
          color="purple"
          id="1"
          position={Position.Right}
          type="source"
        />
      </Button>

      <Button color="purple">
        Button 1
        <Handle
          blockId="1"
          className={styles.Handle}
          color="purple"
          id="1"
          position={Position.Right}
          type="source"
        />
      </Button>
    </div>
  </div>
);

export default FlowBuilderContentDescription;
