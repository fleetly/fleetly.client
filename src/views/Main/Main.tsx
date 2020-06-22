import * as React from 'react';

// Components
import Link from '@components/Link';
import Company from './components/Company';

// Styles
import styles from './Main.scss';

const Main = () => (
  <div className={styles.Root}>
    <div className={styles.Sidebar}>
      <div className={styles.SidebarItem}>
        <Link className={styles.Logo} />
      </div>

      <div className={styles.Companies}>
        <Company id="1" notifications title="Fleetly" />
        <Company id="2" title="Fleetly" />
      </div>

      <div className={styles.SidebarItem}>User</div>
    </div>

    <div className={styles.Container}>Panel</div>
  </div>
);

export default Main;
