import classNames from 'classnames';
import React from 'react';

// Components
import Link from '@components/Link';

// Styles
import styles from './Button.scss';

// Utils
import { getClassName } from '@utils/styles';

interface Classes extends ExtendedClasses {
  icon?: string;
  spinner?: string;
}

interface PropTypes {
  children?: React.ReactNode;
  className?: string;
  classes?: Classes;
  color?: ColorType;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: string;
  id?: number | string;
  loaded?: boolean;
  onClick?(event: React.SyntheticEvent<HTMLButtonElement>): void;
  to?: string;
  type?: 'button' | 'reset' | 'submit';
  variant?: 'filled' | 'outlined';
}

const Button: React.FC<PropTypes> = ({
  children,
  className,
  classes,
  color = 'default',
  disabled,
  fullWidth,
  icon,
  id,
  loaded,
  onClick,
  to,
  type = 'button',
  variant = 'filled',
  ...props
}) => {
  const Component = (props: any) =>
    to ? <Link {...props} to={to} /> : <button {...props} />;

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
          [styles.RootModeIcon]: icon && !children
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

          {children}
        </>
      )}
    </Component>
  );
};

export default Button;
