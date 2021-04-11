import classNames from 'classnames';
import React from 'react';
import { WrappedFieldInputProps } from 'redux-form';

// Decorators
import withReduxForm from '../hocs/withReduxForm';

// Styles
import styles from './Toggle.scss';

const Toggle: React.FC<Form.FieldBase & WrappedFieldInputProps> = ({
  checked,
  id,
  onChange
}) => {
  return (
    <label
      className={classNames(styles.Root, {
        [styles.RootIsChecked]: checked
      })}
      htmlFor={id}
    >
      <input
        className={styles.Input}
        type="checkbox"
        id={id}
        onChange={onChange}
      />
      <div className={styles.Circle} />
    </label>
  );
};

export default withReduxForm({ type: 'checkbox' })(Toggle);
