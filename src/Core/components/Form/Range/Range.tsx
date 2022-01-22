import classNames from 'classnames';
import React, { useCallback } from 'react';
import { Field, FieldProps } from 'react-final-form';

// Styles
import styles from './Range.scss';

// Utils
import { getClassName } from '@utils/styles';

export interface RangeProps extends FieldProps<number, any> {
  color?: Color;
}

export const Range: React.FC<RangeProps> = ({
  className,
  color = 'blue',
  ...props
}) => {
  // Handlers
  const handleInputMouseDown = useCallback(
    (event: React.SyntheticEvent<HTMLInputElement>) => {
      event.stopPropagation();
    },
    []
  );

  const handleFieldParse = useCallback(
    (value: string) => parseFloat(value),
    []
  );

  return (
    <Field {...props} parse={handleFieldParse}>
      {({ input, max, min, step }) => (
        <div
          className={classNames(
            className,
            styles.Root,
            getClassName('color', { collection: styles, value: color })
          )}
        >
          <div
            className={styles.Value}
            style={{ width: `${Math.min(input.value, max)}%` }}
          />

          <input
            {...input}
            className={styles.Input}
            max={max}
            min={min}
            onMouseDown={handleInputMouseDown}
            step={step}
            type="range"
          />
        </div>
      )}
    </Field>
  );
};
