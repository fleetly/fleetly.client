import classNames from 'classnames';
import * as React from 'react';

// Styles
import styles from './Fieldset.scss';

export interface FieldsetProps {
  className?: string;
}

export const Fieldset: React.FC<FieldsetProps> = ({ children, className }) => (
  <div className={classNames(className, styles.Root)}>{children} </div>
);
