import classNames from 'classnames';
import React from 'react';
import { Helmet } from 'react-helmet';

// Styles
import styles from './Page.scss';

interface PropsTypes {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const Page: React.FC<PropsTypes> = ({
  children,
  className,
  title = 'Fleetly'
}) => (
  <>
    <Helmet>
      <title>{title}</title>
    </Helmet>

    <main className={classNames(className, styles.Root)}>{children}</main>
  </>
);

export default Page;
