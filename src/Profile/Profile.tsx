import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Link from '@components/Link';
import Menu from '@components/Menu';
import { H4 } from '@components/Typography';

// Data
import { PROFILE_MENU } from './Profile.data';

// Pages
import { Collaboration } from './pages/Collaboration';
import { ProfileUser } from './pages/User';
import { Security } from './pages/Security';

// Routes
import { PROFILE_ROUTES } from './Profile.routes';

// Styles
import styles from './Profile.scss';

export const Profile = () => (
  <div className={styles.Root}>
    <div className={styles.Sidebar}>
      <Link className={styles.Link}>
        <div className={styles.Logo} />
        <H4 className={styles.Title}>Fleetly</H4>
      </Link>

      <Menu data={PROFILE_MENU} />
    </div>

    <div className={styles.Container}>
      <Switch>
        <Route component={ProfileUser} exact path={PROFILE_ROUTES.ROOT} />

        <Route
          component={Collaboration}
          exact
          path={PROFILE_ROUTES.COLLABORATION}
        />

        <Route component={Security} exact path={PROFILE_ROUTES.SECURITY} />
      </Switch>
    </div>
  </div>
);
