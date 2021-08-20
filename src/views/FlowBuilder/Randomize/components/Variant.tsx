import React, { useCallback, useState } from 'react';
import { Position } from 'react-flow-renderer';

// Components
import DeleteButton from '@components/Button';
import { Text } from '@components/Typography';
import { Button, Handle } from '../../Common';

// Styles
import styles from './Variant.scss';

interface PropTypes {
  id: string;
  name: string;
}

const FlowBuilderRandomizeVariant: React.FC<PropTypes> = ({ name, id }) => {
  // State
  const [value, setValue] = useState<number>(0);

  // Handlers
  const handleMouseDown = useCallback((event: React.SyntheticEvent) => {
    event.stopPropagation();
  }, []);

  const handleValueChange = useCallback(
    (event: React.SyntheticEvent<HTMLInputElement>) => {
      setValue(parseInt(event.currentTarget.value, 10));
    },
    []
  );

  return (
    <div className={styles.Root}>
      <div className={styles.Container}>
        <div className={styles.Title}>
          <Text className={styles.Name} weight="medium">
            {name}
          </Text>

          <Text>%</Text>
        </div>

        <div className={styles.Control}>
          <div className={styles.Value} style={{ width: `${value}%` }} />

          <input
            className={styles.Input}
            max="100"
            min="0"
            name="value"
            onChange={handleValueChange}
            onMouseDown={handleMouseDown}
            type="range"
            value={value}
          />
        </div>

        <DeleteButton
          className={styles.Delete}
          color="danger"
          icon="fal fa-trash-alt"
          variant="outlined"
        />
      </div>

      <div className={styles.Actions}>
        <Button color="purple">
          {name} - {value}%
          <Handle
            blockId={id}
            className={styles.Handle}
            color="purple"
            id={id}
            position={Position.Right}
            type="source"
          />
        </Button>
      </div>
    </div>
  );
};

export default FlowBuilderRandomizeVariant;
