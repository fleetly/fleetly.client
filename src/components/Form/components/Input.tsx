import classNames from 'classnames';
import * as React from 'react';
import { WrappedFieldInputProps } from 'redux-form';

// Components
import { FieldError, FieldHeader } from './common';

// Decorators
import withReduxForm from '../hocs/withReduxForm';

// Styles
import styles from './Input.scss';

const FormInput: React.FC<Form.InputProps & WrappedFieldInputProps> = ({
  classes,
  error,
  disabled,
  id,
  hint,
  label,
  name,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  type = 'text',
  value
}) => {
  const [isFocused, setFocusState] = React.useState(false);

  const handleBlur = (event: React.FocusEvent) => {
    // @todo - if you use it leads to a glitch with a double click on the button
    onBlur(event);
    setFocusState(false);
  };

  const handleFocus = (event: React.FocusEvent) => {
    onFocus(event);
    setFocusState(true);
  };

  return (
    <div
      className={classNames(
        classes?.root,
        styles.Root,
        {
          [classes?.isDisabled || '']: disabled,
          [styles.RootIsDisabled]: disabled
        },
        {
          [classes?.isFocused || '']: isFocused,
          [styles.RootIsFocused]: isFocused
        },
        {
          [classes?.isFailed || '']: !!error,
          [styles.RootIsFailed]: !!error
        }
      )}
    >
      <FieldHeader classes={classes} hint={hint} id={id} label={label} />

      <div className={classNames(classes?.container, styles.Container)}>
        <input
          className={classNames(classes?.input, styles.Input)}
          disabled={disabled}
          id={id}
          name={name}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          value={value}
        />
      </div>

      <FieldError classes={classes} error={error} />
    </div>
  );
};

export default withReduxForm<Form.InputProps>()(FormInput);
