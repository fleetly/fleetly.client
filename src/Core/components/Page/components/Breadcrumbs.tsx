import classNames from 'classnames';
import React from 'react';

// Components
import Link from '@components/Link';

// Styles
import styles from './Breadcrumbs.scss';

export interface Classes extends ExtendedClasses {
  icon?: string;
  link?: string;
}

export interface BreadcrumbsData {
  title: string;
  to?: string;
}

export interface PropTypes {
  classes?: Classes;
  data: BreadcrumbsData[];
}

const PageBreadcrumbs: React.FC<PropTypes> = ({ classes, data }) => (
  <div className={classNames(classes?.root, styles.Root)}>
    {data.map(({ title, to }, index: number) => (
      <Link
        className={classNames(classes?.link, styles.Link)}
        key={index}
        to={to}
      >
        {title}
        {index < data.length - 1 && (
          <i
            className={classNames(
              classes?.icon,
              styles.Icon,
              'fas fa-angle-right'
            )}
          />
        )}
      </Link>
    ))}
  </div>
);

export default PageBreadcrumbs;
