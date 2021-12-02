import classNames from 'classnames';
import React from 'react';

// Components
import { Text } from '@components/Typography';

// Styles
import styles from './Title.scss';

export interface ContextMenuTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const ContextMenuTitle: React.FC<ContextMenuTitleProps> = ({
  children,
  className
}) => (
  <Text
    className={classNames(className, styles.Root)}
    component="div"
    size="small"
    weight="medium"
  >
    {children}
  </Text>
);
