import classNames from 'classnames';
import * as React from 'react';

// Components
import Link from '@components/Link';

// Styles
import { COLOR, getColorClassName } from '@styles/color';
import styles from './Button.scss';

export enum BUTTON_VARIANT {
  FILLED = 'filled',
  OUTLINED = 'outlined'
}

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    root?: string;
  };
  color?: COLOR;
  disabled?: boolean;
  icon?: string;
  onClick?(event: React.SyntheticEvent<HTMLButtonElement>): void;
  to?: string;
  type?: 'button' | 'reset' | 'submit';
  variant?: BUTTON_VARIANT;
}

const Button: React.SFC<ButtonProps> = ({
  children,
  className,
  classes = {},
  color = COLOR.DEFAULT,
  disabled,
  icon,
  onClick,
  to,
  type = 'button',
  variant = BUTTON_VARIANT.OUTLINED
}) => {
  const Component = to ? Link : 'button';

  return (
    <Component
      className={classNames(
        className,
        classes.root,
        styles.Root,
        getColorClassName(color, styles),
        {
          [styles.RootModeIcon]: !children && icon
        },
        {
          [styles.RootVariantFilled]: variant === BUTTON_VARIANT.FILLED,
          [styles.RootVariantOutlined]: variant === BUTTON_VARIANT.OUTLINED
        }
      )}
      disabled={disabled}
      onClick={onClick}
      to={to}
      type={type}
    >
      {icon && <i>{icon}</i>}
      {children}
    </Component>
  );
};

export default Button;
