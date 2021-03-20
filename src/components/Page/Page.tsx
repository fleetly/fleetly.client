import classNames from 'classnames';
import React from 'react';
import { Helmet } from 'react-helmet';

// Styles
import styles from './Page.scss';

interface Classes extends ExtendedClasses {
  container?: string;
}

interface PropsTypes {
  children: React.ReactNode;
  classes?: Classes;
  title?: string;
}

const Page: React.FC<PropsTypes> = ({
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
