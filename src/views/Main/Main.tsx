import classNames from 'classnames';
import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// Components
import Link from '@components/Link';
import Loader from '@components/Loader';

// Containers
import Companies from './containers/Companies';

// Hooks
import { useMainView } from './Main.hooks';

// Routes
import ROUTES from '@routes';

// Styles
import styles from './Main.scss';

// Views
import Company from '@views/Company';
import Profile from '@views/Profile';

// Utils
import { fillUrl } from '@utils/url';

const Main: React.FC<{}> = () => {
  const { companies, isCompany, isProfile, loading } = useMainView();
  const companyId = companies[0]?.id;

  const { rootClassName } = React.useMemo(
    () => ({
      rootClassName: classNames(styles.Root, {
        [styles.RootWithSidebar]: !isProfile
      })
    }),
    [isProfile]
  );

  return companies.length === 0 && loading ? (
    <Loader />
  ) : (
    <div className={rootClassName}>
      {companyId && !isCompany && (
        <Redirect to={fillUrl(ROUTES.COMPANY.DASHBOARD, { companyId })} />
      )}

      {!isProfile && (
        <div className={styles.Sidebar}>
          <div className={styles.SidebarItem}>
            <Link className={styles.Logo} />
          </div>

          <div className={styles.Companies}>
            <Companies data={companies} />
          </div>

          <div className={styles.SidebarItem}>
            <Link className={styles.User} to={ROUTES.PROFILE.GENERAL} />
          </div>
        </div>
      )}

      <div className={styles.Container}>
        <Switch>
          <Route component={Profile} path={ROUTES.PROFILE.GENERAL} />
          <Route component={Company} path={ROUTES.COMPANY.ROOT} />
        </Switch>
      </div>
    </div>
  );
};

export default Main;
