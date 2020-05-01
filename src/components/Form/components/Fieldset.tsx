import classNames from 'classnames';
import * as React from 'react';

// Styles
import styles from './Fieldset.scss';

interface FieldsetProps {
  children?: React.ReactNode;
  classes?: {
    root?: string;
  };
}

const FormFieldset: React.SFC<FieldsetProps> = ({ children, classes = {} }) => (
  <div className={classNames(classes.root, styles.Root)}>{children}</div>
);

export default FormFieldset;
