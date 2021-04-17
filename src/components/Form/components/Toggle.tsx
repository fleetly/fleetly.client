import classNames from 'classnames';
import React from 'react';
import { WrappedFieldInputProps } from 'redux-form';

// HOSc
import withReduxForm from '../hocs/withReduxForm';

// Styles
import styles from './Toggle.scss';

const Toggle: React.FC<Form.FieldBase & WrappedFieldInputProps> = ({
  checked,
  id,
  name,
  onChange,
  value
}) => (
  <label
    className={classNames(styles.Root, {
      [styles.RootIsChecked]: checked
    })}
    htmlFor={id}
  >
    <input
      className={styles.Input}
      id={id}
      name={name}
      onChange={onChange}
      type="checkbox"
      value={value}
    />
    <div className={styles.Circle} />
  </label>
);

export default withReduxForm({ type: 'checkbox' })(Toggle);
