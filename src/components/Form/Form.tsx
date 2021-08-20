import classNames from 'classnames';
import * as React from 'react';

// Components
import Badge from '@components/Badge';

// Styles
import styles from './Form.scss';

const Form: React.FC<Form.Props> = ({ children, classes, error, onSubmit }) => (
  <form className={classNames(classes?.root, styles.Root)} onSubmit={onSubmit}>
    {error && (
      <Badge
        classes={{ root: styles.Error }}
        color="red"
        description={error}
        icon="fas fa-exclamation-triangle"
        title="Error"
      />
    )}

    <div className={classNames(classes?.container, styles.Container)}>
      {children}
    </div>
  </form>
);

export default Form;
