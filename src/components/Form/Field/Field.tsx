import classNames from 'classnames';
import React from 'react';
import {
  Field as FinalField,
  FieldProps as FinalFieldProp,
  useField
} from 'react-final-form';

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
}

export const Field: React.FC<FieldProps> = ({
  hint,
  label,
  name,
  ...props
}) => {
  // Setup
  const {
    input: { disabled },
    meta: { active, error, touched }
  } = useField(name);

  return (
    <div
      className={classNames(styles.Root, {
        [styles.RootIsDisabled]: disabled,
        [styles.RootIsFocused]: active,
        [styles.RootIsInvalid]: error && touched
      })}
    >
      <label className={styles.Label}>
        {label && <FieldHeader hint={hint} label={label} />}

        <div className={styles.Container}>
          <FinalField
            {...props}
            className={styles.Input}
            component="input"
            name={name}
          />
        </div>

        {touched && <FieldError>{error}</FieldError>}
      </label>
    </div>
  );
};
