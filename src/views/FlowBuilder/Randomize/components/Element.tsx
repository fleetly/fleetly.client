import React, { useState } from 'react';
import { Position } from 'react-flow-renderer';

// Components
import DeleteButton from '@components/Button';
import { Text } from '@components/Typography';
import { Button, Handle } from '../../Common';

// Styles
import styles from './Element.scss';

interface PropTypes {
  name: string;
  id: string;
}

const FlowBuilderRandomizeElement: React.FC<PropTypes> = ({ name, id }) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setValue(parseInt(event.currentTarget.value, 10));
  };

  return (
    <div className={styles.Root}>
      <div className={styles.Range}>
        <Text className={styles.Name}>{name}</Text>

        <div className={styles.RangeProgress}>
          <div className={styles.Progress} style={{ width: `${value}%` }} />
          <input
            className={styles.Input}
            max="100"
            min="0"
            onChange={handleChange}
            onMouseDown={(event) => event?.stopPropagation()}
            type="range"
            value={value}
          />
        </div>

        <DeleteButton
          className={styles.DeleteButton}
          color="danger"
          icon="fal fa-trash-alt"
          variant="outlined"
        />
      </div>

      <Button color="purple">
        {name} - {value}%
        <Handle
          className={styles.Handle}
          color="purple"
          id={id}
          parentId={id}
          position={Position.Right}
          type="source"
        />
      </Button>
    </div>
  );
};

export default FlowBuilderRandomizeElement;
