import classNames from 'classnames';
import * as React from 'react';

// Components
import Link from '@components/Link';

// Styles
import styles from './Button.scss';

// Utils
import { getClassName } from '@utils/styles';

const Button: React.SFC<Button.Props> = ({
  children,
  className,
  classes,
  color = 'default',
  disabled,
  icon,
  loaded,
  onClick,
  to,
  type = 'button',
  variant = 'filled'
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
        getClassName('variant', { collection: styles, value: variant })
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
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
