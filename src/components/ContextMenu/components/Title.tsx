import classNames from 'classnames';
import React from 'react';

// Components
import { Text } from '@components/Typography';

// Styles
import styles from './Title.scss';

interface PropTypes {
  children: React.ReactNode;
  className?: string;
}

const ContextMenuTitle: React.FC<PropTypes> = ({ children, className }) => (
  <Text className={classNames(className, styles.Root)} medium size="small">
    {children}
  </Text>
);

export default ContextMenuTitle;
