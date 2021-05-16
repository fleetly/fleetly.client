import classNames from 'classnames';
import React, { useState } from 'react';
import { Position } from 'react-flow-renderer';

// Components
import { Button, Handle } from '../../Common';
import { Text } from '@components/Typography';

// Hooks
import { useOutsideClick } from '@hooks/events';

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

const FlowBuilderContentText = () => {
  // State
  const [value] = useState<string>('This test text');

  const [state, setState] = useState(false);

  const handleClickOpened = () => setState(true);
  const handleClickClosed = () => setState(false);

  const ref = useOutsideClick(state ? handleClickClosed : undefined);

  return (
    <div
      className={classNames(styles.Root, { [styles.RootIsAction]: state })}
      onClick={handleClickOpened}
      ref={ref}
    >
      {state ? (
        <textarea
          autoFocus
          className={styles.DescriptionEditor}
          name="value"
          value={value}
        />
      ) : (
        <Text className={styles.Description} size="small">
          {value}
        </Text>
      )}

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
};

export default FlowBuilderContentText;
