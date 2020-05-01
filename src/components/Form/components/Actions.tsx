import classNames from 'classnames';
import * as React from 'react';

// Styles
import styles from './Actions.scss';

interface ActionsProps {
  children?: React.ReactNode;
  classes?: {
    root?: string;
  };
}

const Actions: React.SFC<ActionsProps> = ({ children, classes = {} }) => (
  <div className={classNames(classes.root, styles.Root)}>{children}</div>
);

export default Actions;
