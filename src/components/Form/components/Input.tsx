import classNames from 'classnames';
import * as React from 'react';

// Components
import { P, H6 } from '@components/Typography';

// Styles
import styles from './Input.scss';

interface InputProps {
  classes?: {
    root?: string;
    description?: string;
    header?: string;
    error?: string;
    label?: string;
    info?: string;
    input?: string;
  };
  disabled?: boolean;
  error?: string;
  id: string;
  label?: string;
  name: string;
  placeholder?: string;
  // TODO: return required attribute for onChange field before merging pull request
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  type?: string;
  value: number | string;
  autoComplete?: React.ReactNode;
}

const Input: React.SFC<InputProps> = ({
  classes = {},
  disabled,
  error,
  id,
  label,
  name,
  onChange,
  placeholder,
  type = 'text',
  autoComplete,
  value
}) => (
  <div
    className={classNames(classes.root, styles.Root, {
      [styles.RootIsFailed]: !!error
    })}
  >
    {label && (
      <P
        className={classNames(classes.root, styles.Label)}
        component="label"
        htmlFor={id}
      >
        {label}
      </P>
    )}

    <input
      className={classNames(classes.input, styles.Input, {
        [styles.InputError]: !!error
      })}
      disabled={disabled}
      id={id}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />

    {autoComplete && (
      <div className={styles.AutoCompleteWrapper}>
        <div className={styles.AutoComplete}>{autoComplete}</div>
      </div>
    )}

    {error && (
      <H6 className={classNames(classes.error, styles.Error)}>{error}</H6>
    )}
  </div>
);

export default Input;
