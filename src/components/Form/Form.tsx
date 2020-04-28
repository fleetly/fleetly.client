import classNames from 'classnames';
import * as React from 'react';

// Components
import { P } from '@components/Typography';

// Styles
import styles from './Form.scss';

interface FormProps {
  children: React.ReactNode;
  classes?: {
    root?: string;
    container?: string;
    error?: string;
  };
  error?: string;
  onSubmit: () => void;
}

const Form: React.SFC<FormProps> = ({
  children,
  classes = {},
  error,
  onSubmit
}) => (
  <form className={classes.root} onSubmit={onSubmit}>
    {error && (
      <P className={classNames(classes.error, styles.Error)}>{error}</P>
    )}

    <div className={classes.container}>{children}</div>
  </form>
);

export default Form;
