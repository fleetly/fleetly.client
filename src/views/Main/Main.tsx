import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Link from '@components/Link';

// Containers
import Companies from './containers/Companies';

// Routes
import ROUTES from '@routes';

// Styles
import styles from './Main.scss';

// Views
import Company from '@views/Company';

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

    <div className={styles.Container}>
      <Switch>
        <Route component={Company} path={ROUTES.COMPANY.path} />
      </Switch>
    </div>
  </div>
);

export default Main;
