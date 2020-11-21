import classNames from 'classnames';
import * as React from 'react';

// Components
import { H3 } from '@components/Typography';
import Breadcrumbs from './Breadcrumbs';

// Styles
import styles from './Wrapper.scss';

const PageWrapper: React.FC<Page.WrapperProps> = ({
  actions,
  children,
  classes,
  breadcrumbs,
  title
}) => (
  <div className={classNames(classes?.root, styles.Root)}>
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
