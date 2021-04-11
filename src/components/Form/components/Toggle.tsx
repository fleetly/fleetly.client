import classNames from 'classnames';
import React from 'react';

// Decorators
import withReduxForm from '../hocs/withReduxForm';

// Styles
import styles from './Toggle.scss';

const Toggle: React.FC<any> = (props) => (
  <label
    className={classNames(styles.Root, {
      [styles.RootChecked]: props.checked,
      [styles.RootUnChecked]: !props.checked
    })}
    htmlFor={props.id}
  >
    <input
      className={styles.Checkbox}
      type="checkbox"
      id={props.id}
      onChange={props.onChange}
    />
    <div className={styles.Check} />
  </label>
);

export default withReduxForm({ type: 'checkbox' })(Toggle);
