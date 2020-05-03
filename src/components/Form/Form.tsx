import classNames from 'classnames';
import * as React from 'react';

// Components
import Transition from '@components/Transition';

// Styles
import styles from './Form.scss';

const Form: React.SFC<Form.Props> = ({
  children,
  classes,
  error,
  onSubmit
}) => (
  <form className={classes?.root} onSubmit={onSubmit}>
    <Transition duration={400} enter="fadeInUp" in={!!error}>
      <div className={classNames(classes?.error, styles.Error)}>{error}</div>
    </Transition>

    <div className={classes?.container}>{children}</div>
  </form>
);

export default Form;
