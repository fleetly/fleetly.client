import { useMutation } from '@apollo/client';
import React, { useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Button from '@components/Button';
import Link from '@components/Link';
import Menu from '@components/Menu';
import { H4 } from '@components/Typography';

// Data
import { PROFILE_MENU } from './Profile.data';

// GraphQL
import LOGOUT from './graphql/logout.gql';

// Pages
import { Collaboration } from './pages/Collaboration';
import { ProfileUser } from './pages/User';
import { Security } from './pages/Security';

// Routes
import { PROFILE_ROUTES } from './Profile.routes';

// Store
import { useSession } from '@store';

// Styles
import styles from './Profile.scss';

export const Profile = () => {
  // Setup
  const session = useSession();

  // Mutations
  const [logout, { loading }] = useMutation(LOGOUT);

  // Handlers
  const handleLogoutClick = useCallback(async () => {
    await logout();
    session.logout();
  }, [logout, session]);

  return (
    <div className={styles.Root}>
      <div className={styles.Sidebar}>
        <Link className={styles.Link}>
          <div className={styles.Logo} />
          <H4 className={styles.Title}>Fleetly</H4>
        </Link>

        <Menu className={styles.Menu} data={PROFILE_MENU} />

        <div className={styles.Logout}>
          <Button
            color="blue"
            fullWidth
            icon="fad fa-sign-out-alt"
            loaded={loading}
            onClick={handleLogoutClick}
            variant="outlined"
          >
            Logout
          </Button>
        </div>
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
};
