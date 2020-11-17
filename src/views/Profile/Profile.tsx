import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Link from '@components/Link';
import Menu from '@components/Menu';
import { H4 } from '@components/Typography';

// Routes
import ROUTES from '@routes';

// Styles
import styles from './Profile.scss';

// Views
import Collaboration from '@views/ProfileCollaboration';
import General from '@views/ProfileGeneral';
import Security from '@views/ProfileSecurity';

const Profile = () => {
  const MENU = React.useMemo(
    () => [
      {
        children: [
          {
            exact: true,
            icon: 'fas fa-user-circle',
            title: 'Profile',
            to: ROUTES.PROFILE.GENERAL
          },
          {
            icon: 'far fa-users',
            title: 'Collaboration',
            to: ROUTES.PROFILE.COLLABORATION
          },
          {
            icon: 'far fa-shield-alt',
            title: 'Security',
            to: ROUTES.PROFILE.SECURITY
          }
        ]
      }
    ],
    []
  );

  return (
    <div className={styles.Root}>
      <div className={styles.Sidebar}>
        <div className={styles.SidebarHeader}>
          <Link className={styles.Logo}>
            <div className={styles.LogoCover} />
            <H4 className={styles.LogoTitle}>Fleetly</H4>
          </Link>
        </div>

        <div className={styles.Menu}>
          <Menu data={MENU} />
        </div>
      </div>

      <div className={styles.Container}>
        <Switch>
          <Route
            component={Collaboration}
            path={ROUTES.PROFILE.COLLABORATION}
          />
          <Route component={Security} path={ROUTES.PROFILE.SECURITY} />
          <Route component={General} path={ROUTES.PROFILE.GENERAL} />
        </Switch>
      </div>
    </div>
  );
};

export default Profile;
