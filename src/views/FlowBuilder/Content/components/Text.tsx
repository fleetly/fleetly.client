import React from 'react';
import { Position } from 'react-flow-renderer';

// Components
import { Button, Handle } from '../../Common';
import { Text } from '@components/Typography';

// Styles
import styles from './Text.scss';

interface PropTypes {
  id: string;
  text: string;
  button: {
    id: string;
    text: string;
  }[];
}

const FlowBuilderContentText = () => (
  <div className={styles.Root}>
    <Text className={styles.Description} size="small">
      You have successfully subscribed to Page Name ! The next post is coming
      soon, stay tuned!
    </Text>

    <div className={styles.Actions}>
      <Button color="blue">
        Button 1
        <Handle
          blockId="1"
          className={styles.Handle}
          color="blue"
          id="1"
          position={Position.Right}
          type="source"
        />
      </Button>

      <Button color="blue">
        Button 1
        <Handle
          blockId="1"
          className={styles.Handle}
          color="blue"
          id="1"
          position={Position.Right}
          type="source"
        />
      </Button>

      <Button color="blue">
        Button 1
        <Handle
          blockId="1"
          className={styles.Handle}
          color="blue"
          id="1"
          position={Position.Right}
          type="source"
        />
      </Button>

      <div className={styles.Add}>
        <Button color="blue">Add Button</Button>
      </div>
    </div>
  </div>
);

export default FlowBuilderContentText;
