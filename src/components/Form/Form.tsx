import classNames from 'classnames';
import * as React from 'react';

// Components
import Badge from '@components/Badge';
import Transition from '@components/Transition';

// Styles
import styles from './Form.scss';

const Form: React.FC<Form.Props> = ({ children, classes, error, onSubmit }) => (
  <form className={classNames(classes?.root, styles.Root)} onSubmit={onSubmit}>
    <Transition duration={400} enter="fadeInUp" in={!!error}>
      <Badge
        classes={{ root: styles.Error }}
        color="red"
        icon="fas fa-exclamation-triangle"
        title={error}
      />
    </Transition>

    <div className={classNames(classes?.container, styles.Container)}>
      {children}
    </div>
  </form>
);

export default Form;
