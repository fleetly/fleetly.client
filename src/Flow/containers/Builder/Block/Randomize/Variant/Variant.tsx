import React, { useCallback, useContext, useMemo } from 'react';
import { Field, useField } from 'react-final-form';
import { Position } from 'react-flow-renderer';

// Components
import { Range } from '@components/Form';
import { Text } from '@components/Typography';

import {
  BuilderButton,
  BuilderHandle
} from '@flow/containers/Builder/Common/components';

// Contexts
import { BuilderContext } from '@flow/containers/Builder';

// Styles
import styles from './Variant.scss';

// Utils
import { numberToLetter } from '@utils/string';

export interface BlockRandomizeVariantProps {
  id: string;
  index: number;
  payload?: {
    value: number;
  };
}

export const BlockRandomizeVariant: React.FC<BlockRandomizeVariantProps> = ({
  id,
  index
}) => {
  // Setup
  const { isEditable } = useContext(BuilderContext);
  const {
    input: { value }
  } = useField('value');

  // Handlers
  const handleFieldParse = useCallback(
    (value: string) => Math.max(1, Math.min(parseFloat(value), 100)),
    []
  );

  // Memo
  const letter = useMemo(() => numberToLetter(index), [index]);

  return (
    <div>
      {isEditable && (
        <div className={styles.Control}>
          <Text className={styles.Title} weight="semiBold">
            {letter} <span className={styles.Percent}>%</span>
          </Text>

          <Range
            className={styles.Range}
            color="purple"
            max={100}
            min={1}
            step={1}
            name="value"
          />

          <Field
            className={styles.Input}
            component="input"
            name="value"
            parse={handleFieldParse}
          />
        </div>
      )}

      <BuilderButton color="purple">
        {letter} - {value}%
        <BuilderHandle
          className={styles.Handle}
          id={id}
          position={Position.Right}
          type="source"
        />
      </BuilderButton>
    </div>
  );
};
