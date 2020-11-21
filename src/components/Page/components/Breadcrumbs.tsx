import classNames from 'classnames';
import * as React from 'react';

// Components
import Link from '@components/Link';

// Styles
import styles from './Breadcrumbs.scss';

const PageBreadcrumbs: React.FC<Page.BreadcrumbsProps> = ({
  classes,
  data
}) => {
  // ClassNames
  const { rootClassName, iconClassName, linkClassName } = React.useMemo(
    () => ({
      rootClassName: classNames(classes?.root, styles.Root),
      iconClassName: classNames(
        classes?.icon,
        styles.Icon,
        'fas fa-angle-right'
      ),
      linkClassName: classNames(classes?.link, styles.Link)
    }),
    [classes]
  );

  return (
    <div className={rootClassName}>
      {data.map(({ title, to }, index: number) => (
        <Link className={linkClassName} key={index} to={to}>
          {title}
          {index < data.length - 1 && <i className={iconClassName} />}
        </Link>
      ))}
    </div>
  );
};

export default PageBreadcrumbs;
