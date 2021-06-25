import classNames from 'classnames';
import React from 'react';

// Styles
import styles from './Column.scss';

interface ContextMenuColumnProps {
  className?: string;
}

const ContextMenuColumn: React.FC<ContextMenuColumnProps> = ({
  children,
  className
}) => <div className={classNames(className, styles.Root)}>{children}</div>;

export default ContextMenuColumn;
