import classNames from 'classnames';
import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// Styles
import styles from './Link.scss';

// Utils
import { isExternal } from '@utils/url';

interface LinkProps {
  children: React.ReactNode;
  className?: string;
  classes?: {
    root?: string;
  };
  to?: string;
}

const Link: React.SFC<LinkProps> = ({
  children,
  className: classNameProp,
  classes = {},
  to = '/'
}) => {
  const className = classNames(classNameProp, classes.root, styles.Root);

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
