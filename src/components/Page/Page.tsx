import classNames from 'classnames';
import * as React from 'react';
import { Helmet } from 'react-helmet';

// Styles
import styles from './Page.scss';

const Page: React.SFC<Page.Props> = ({
  children,
  classes,
  title = 'Fleetly'
}) => (
  <div className={classNames(classes?.root, styles.Root)}>
    <Helmet>
      <title>{title}</title>
    </Helmet>

    <main className={classNames(classes?.container, styles.Container)}>
      {children}
    </main>
  </div>
);

export default Page;
