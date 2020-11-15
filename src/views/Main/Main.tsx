import classNames from 'classnames';
import * as React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

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
import Profile from '@views/Profile';

const Main: React.FC<{}> = () => {
  // const isCompany = useRouteMatch(ROUTES.COMPANY.path);
  const isProfile = !!useRouteMatch(ROUTES.PROFILE.path);

  const { rootClassName } = React.useMemo(
    () => ({
      rootClassName: classNames(styles.Root, {
        [styles.RootWithSidebar]: !isProfile
      })
    }),
    [isProfile]
  );

  return (
    <div className={rootClassName}>
      {!isProfile && (
        <div className={styles.Sidebar}>
          <div className={styles.SidebarItem}>
            <Link className={styles.Logo} />
          </div>

          <div className={styles.Companies}>
            <Companies />
          </div>

          <div className={styles.SidebarItem}>
            <Link className={styles.User} to={ROUTES.PROFILE.GENERAL.path} />
          </div>
        </div>
      )}

      <div className={styles.Container}>
        <Switch>
          <Route component={Profile} path={ROUTES.PROFILE.path} />
          <Route component={Company} path={ROUTES.COMPANY.path} />
        </Switch>
      </div>
    </div>
  );
};

export default Main;
