import classNames from 'classnames';
import * as React from 'react';

// Components
import Transition from '@components/Transition';

// Styles
import styles from './Form.scss';

const Form: React.FC<Form.Props> = ({ children, classes, error, onSubmit }) => {
  const { rootClassName, errorClassName, containerClassName } = React.useMemo(
    () => ({
      rootClassName: classNames(classes?.root, styles.Root),
      errorClassName: classNames(classes?.error, styles.Error),
      containerClassName: classNames(classes?.container, styles.Container)
    }),
    [classes]
  );

  return (
    <form className={rootClassName} onSubmit={onSubmit}>
      <Transition duration={400} enter="fadeInUp" in={!!error}>
        <div className={errorClassName}>{error}</div>
      </Transition>

      <div className={containerClassName}>{children}</div>
    </form>
  );
};

export default Form;
