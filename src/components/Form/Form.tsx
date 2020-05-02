import classNames from 'classnames';
import * as React from 'react';

// Styles
import styles from './Form.scss';

const Form = ({ children, classes, error, onSubmit }: Form.Props) => (
  <form className={classes?.root} onSubmit={onSubmit}>
    {error && (
      <div className={classNames(classes?.error, styles.Error)}>{error}</div>
    )}
    <div className={classes?.container}>{children}</div>
  </form>
);

export default Form;
