import classNames from 'classnames';
import * as React from 'react';

// Components
import Transition from '@components/Transition';

// Styles
import styles from './Form.scss';

const Form = ({ children, classes, error, onSubmit }: Form.Props) => (
  <form className={classes?.root} onSubmit={onSubmit}>
    <Transition duration={400} enter="fadeInUp" in={!!error} timeout={400}>
      <div className={classNames(classes?.error, styles.Error)}>{error}</div>
    </Transition>

    <div className={classes?.container}>{children}</div>
  </form>
);

export default Form;
