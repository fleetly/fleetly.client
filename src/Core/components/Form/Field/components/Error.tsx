import classNames from 'classnames';
import React from 'react';

// Components
import { Text } from '@components/Typography';

// Styles
import styles from './Error.scss';

export interface FieldErrorProps {
  className?: string;
}

export const FieldError: React.FC<FieldErrorProps> = ({
  children,
  className
}) => (
  <Text
    className={classNames(className, styles.Root)}
    size="small"
    weight="semiBold"
  >
    {children}
  </Text>
);
