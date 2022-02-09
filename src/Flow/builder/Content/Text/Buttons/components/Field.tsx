import React from 'react';
import { useField } from 'react-final-form';
import { Position } from 'react-flow-renderer';

// Builder
import { Button, Handle } from '@flow/builder';

// Styles
import styles from './Field.scss';

export interface ContentTextButtonsFieldProps {
  name: string;
  readOnly?: boolean;
}

export const ContentTextButtonsField: React.FC<ContentTextButtonsFieldProps> = ({
  name,
  readOnly
}) => {
  // Setup
  const {
    input: { value }
  } = useField(name);

  return (
    <Button color="blue">
      {value.text}

      {readOnly && (
        <Handle
          id={value.id}
          className={styles.Handle}
          position={Position.Right}
          type="source"
        />
      )}
    </Button>
  );
};
