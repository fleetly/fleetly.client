import classNames from 'classnames';
import * as React from 'react';

// Components
import Link from '@components/Link';

// Styles
import { Color, getColorClassName } from '@styles/color';
import styles from './Button.scss';

export enum ButtonVariant {
  Filled,
  Outlined
}

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  classes?: {
    root?: string;
  };
  color?: Color;
  disabled?: boolean;
  icon?: string;
  onClick?(event: React.SyntheticEvent<HTMLButtonElement>): void;
  to?: string;
  type?: 'button' | 'reset' | 'submit';
  variant?: ButtonVariant;
}

const Button: React.SFC<ButtonProps> = ({
  children,
  className,
  classes = {},
  color = Color.Default,
  disabled,
  icon,
  onClick,
  to,
  type = 'button',
  variant = ButtonVariant.Outlined
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
          [styles.RootVariantFilled]: variant === ButtonVariant.Filled,
          [styles.RootVariantOutlined]: variant === ButtonVariant.Outlined
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
