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
  to?: string;
}

const Link: React.FC<PropTypes> = ({
  children,
  className: classNameProp,
  to = '/'
}) => {
  const className = classNames(classNameProp, styles.Root);

  return isExternal(to) ? (
    <a
      className={className}
      href={to}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  ) : (
    <RouterLink className={className} to={to}>
      {children}
    </RouterLink>
  );
};

export default Link;
