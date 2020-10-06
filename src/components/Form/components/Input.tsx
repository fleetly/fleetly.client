import classNames from 'classnames';
import * as React from 'react';

// Decorators
import withReduxForm from '../hocs/withReduxForm';

// Styles
import styles from './Input.scss';

const FormInput: React.FC<Form.Input.Props> = ({
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
      {(label || hint) && (
        <div className={classNames(classes?.header, styles.Header)}>
          <label
            className={classNames(classes?.label, styles.Label)}
            htmlFor={id}
          >
            {label}
          </label>

          <div className={classNames(classes?.hint, styles.Hint)}>{hint}</div>
        </div>
      )}

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

      {error && (
        <div className={classNames(classes?.error, styles.Error)}>{error}</div>
      )}
    </div>
  );
};

export default withReduxForm<Form.Input.Props>()(FormInput);
