import classNames from 'classnames';
import React, { useCallback } from 'react';
import { FieldProps as FinalFieldProp, useField } from 'react-final-form';

// Components
import { FieldError } from './components/Error';
import { FieldHeader } from './components/Header';

// Styles
import styles from './Field.scss';

export type FieldType = boolean | number | string;

export interface FieldProps extends FinalFieldProp<FieldType, any> {
  className?: string;
  hint?: React.ReactNode;
  label?: React.ReactNode;
  pre?: React.ReactNode;
  post?: React.ReactNode;
}

export const Field: React.FC<FieldProps> = ({
  hint,
  label,
  name,
  post,
  pre,
  type = 'text'
}) => {
  // Setup
  const {
    input,
    meta: { active, touched, ...meta }
  } = useField(name);

  const error = meta.error || meta.submitError;

  // Handlers
  const handleInputMouseDown = useCallback(
    (event: React.SyntheticEvent<HTMLInputElement>) => {
      event.stopPropagation();
    },
    []
  );

  return (
    <div
      className={classNames(styles.Root, {
        [styles.RootIsDisabled]: input.disabled,
        [styles.RootIsFocused]: active,
        [styles.RootIsInvalid]: error && touched
      })}
    >
      <label className={styles.Label}>
        {label && <FieldHeader hint={hint} label={label} />}

        <div className={styles.Container}>
          {pre && <div className={styles.Addition}>{pre}</div>}

          <input
            {...input}
            className={styles.Input}
            onMouseDown={handleInputMouseDown}
            type={type}
          />

          {post && <div className={styles.Addition}>{post}</div>}
        </div>

        {error && touched && <FieldError>{error}</FieldError>}
      </label>
    </div>
  );
};
