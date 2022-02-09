import classNames from 'classnames';
import React from 'react';

// Styles
import styles from './Button.scss';

// Utils
import { getClassName } from '@utils/styles';

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  color?: Color;
  icon?: string;
  onClick?(event: React.SyntheticEvent<HTMLButtonElement>): void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  color = 'default',
  icon,
  onClick
}) => (
  <button
    className={classNames(
      className,
      styles.Root,
      getClassName('color', { collection: styles, value: color })
    )}
    onClick={onClick}
    type="button"
  >
    {icon && <i className={classNames(styles.Icon, icon)} />}
    {children}
  </button>
);
