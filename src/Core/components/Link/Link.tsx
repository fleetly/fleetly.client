import classNames from 'classnames';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// Styles
import styles from './Link.scss';

// Utils
import { isExternal } from '@utils/url';

interface PropTypes {
  children?: React.ReactNode;
  className?: string;
  onClick?(event: React.SyntheticEvent<HTMLAnchorElement>): void;
  to?: string;
}

const Link: React.FC<PropTypes> = ({
  children,
  className: classNameProp,
  onClick,
  to = '/',
  ...props
}) => {
  const className = classNames(classNameProp, styles.Root);

  return isExternal(to) ? (
    <a
      {...props}
      className={className}
      href={to}
      onClick={onClick}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  ) : (
    <RouterLink {...props} className={className} onClick={onClick} to={to}>
      {children}
    </RouterLink>
  );
};

export default Link;
