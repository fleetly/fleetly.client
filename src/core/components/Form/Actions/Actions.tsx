import classNames from 'classnames';
import React from 'react';

// Styles
import styles from './Actions.scss';

export interface ActionsProps {
  children: React.ReactNode;
  className?: string;
}

export const Actions: React.FC<ActionsProps> = ({ children, className }) => (
  <div
    className={classNames(className, styles.Root)}
    style={{
      gridTemplateColumns: `repeat(${React.Children.count(children)}, 1fr)`
    }}
  >
    {children}
  </div>
);
