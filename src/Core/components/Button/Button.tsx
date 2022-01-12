import classNames from 'classnames';
import React, { useMemo } from 'react';

// Components
import Link from '@components/Link';

// Styles
import styles from './Button.scss';

// Utils
import { getClassName } from '@utils/styles';

export interface ButtonClasses extends ExtendedClasses {
  icon?: string;
  spinner?: string;
}

export interface ButtonProps {
  className?: string;
  classes?: ButtonClasses;
  color?: Color;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: string;
  id?: number | string;
  loaded?: boolean;
  onClick?(event: React.SyntheticEvent<HTMLButtonElement>): void;
  title?: string;
  to?: string;
  type?: 'button' | 'reset' | 'submit';
  variant?: 'filled' | 'outlined';
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  classes,
  color = 'gray',
  disabled,
  fullWidth,
  icon,
  id,
  loaded,
  onClick,
  title,
  to,
  type = 'button',
  variant = 'filled',
  ...props
}) => {
  const Component = useMemo(
    () => (props: any) =>
      to ? <Link {...props} to={to} /> : <button {...props} />,
    [to]
  );

  return (
    <Component
      className={classNames(
        className,
        classes?.root,
        styles.Root,
        getClassName('color', { collection: styles, value: color }),
        getClassName('variant', { collection: styles, value: variant }),
        {
          [styles.RootIsDisabled]: disabled
        },
        {
          [styles.RootModeFullWidth]: fullWidth,
          [styles.RootModeIcon]: icon && !children && !title
        }
      )}
      disabled={disabled}
      id={id}
      onClick={onClick}
      type={type}
      {...props}
    >
      {loaded ? (
        <i
          className={classNames(
            classes?.spinner,
            styles.Spinner,
            'far fa-spinner-third'
          )}
        />
      ) : (
        <>
          {icon && (
            <i className={classNames(classes?.icon, styles.Icon, icon)} />
          )}

          {children || title}
        </>
      )}
    </Component>
  );
};

export default Button;
