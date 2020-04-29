import classNames from 'classnames';
import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// Styles
import styles from './Link.scss';

// Utils
import { isExternal } from '@utils/url';

const Link: React.SFC<Link.Props> = ({
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
