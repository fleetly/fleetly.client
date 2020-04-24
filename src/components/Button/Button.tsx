import classNames from 'classnames';
import * as React from 'react';

// Components
import Link from '@components/Link';

// Styles
import { COLOR, getColorClassName } from '@styles/color';
import styles from './Button.scss';

enum VARIANT {
  FILLED = 'filled',
  OUTLINED = 'outlined'
}

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  classes?: {
    root?: string;
  };
  color?: COLOR;
  disabled?: boolean;
  onClick?(event: React.SyntheticEvent<HTMLButtonElement>): void;
  to?: string;
  type?: 'button' | 'reset' | 'submit';
  variant?: VARIANT;
}

const Button: React.SFC<ButtonProps> = ({
  children,
  className,
  classes = {},
  color = COLOR.DEFAULT,
  disabled,
  onClick,
  to,
  type = 'button',
  variant = VARIANT.OUTLINED
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
          [styles.RootVariantFilled]: variant === VARIANT.FILLED,
          [styles.RootVariantOutlined]: variant === VARIANT.OUTLINED
        }
      )}
      disabled={disabled}
      onClick={onClick}
      to={to}
      type={type}
    >
      {children}
    </Component>
  );
};

export default Button;
