import classNames from 'classnames';
import React from 'react';

// Styles
import styles from './Column.scss';

export interface ContextMenuColumnProps {
  className?: string;
}

export const ContextMenuColumn: React.FC<ContextMenuColumnProps> = ({
  children,
  className
}) => <div className={classNames(className, styles.Root)}>{children}</div>;
