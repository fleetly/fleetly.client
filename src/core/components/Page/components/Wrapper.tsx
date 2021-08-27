import classNames from 'classnames';
import React from 'react';

// Components
import { H3 } from '@components/Typography';
import Breadcrumbs, {
  Classes as BreadcrumbsClasses,
  BreadcrumbsData
} from './Breadcrumbs';

// Styles
import styles from './Wrapper.scss';

interface Classes extends ExtendedClasses {
  actions?: string;
  breadcrumbs?: BreadcrumbsClasses;
  container?: string;
  header?: string;
  title?: string;
}

interface PropTypes {
  actions?: React.ReactNode;
  children: React.ReactNode;
  classes?: Classes;
  className?: string;
  breadcrumbs?: BreadcrumbsData[];
  title?: string;
}

const PageWrapper: React.FC<PropTypes> = ({
  actions,
  children,
  classes,
  className,
  breadcrumbs,
  title
}) => (
  <div className={classNames(className, classes?.root, styles.Root)}>
    <div className={classNames(classes?.header, styles.Header)}>
      {breadcrumbs && (
        <Breadcrumbs classes={classes?.breadcrumbs} data={breadcrumbs} />
      )}

      {title && <H3>{title}</H3>}

      <div className={classNames(classes?.actions, styles.Actions)}>
        {actions}
      </div>
    </div>

    <div className={classNames(classes?.container, styles.Container)}>
      {children}
    </div>
  </div>
);

export default PageWrapper;
