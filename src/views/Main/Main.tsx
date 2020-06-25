import * as React from 'react';

// Components
import Link from '@components/Link';

// Containers
import Companies from './containers/Companies';

// Styles
import styles from './Main.scss';

const Main = () => (
  <div className={styles.Root}>
    <div className={styles.Sidebar}>
      <div className={styles.SidebarItem}>
        <Link className={styles.Logo} />
      </div>

      <div className={styles.Companies}>
        <Companies />
      </div>

      <div className={styles.SidebarItem}>User</div>
    </div>

    <div className={styles.Container}>Panel</div>
  </div>
);

export default Main;
