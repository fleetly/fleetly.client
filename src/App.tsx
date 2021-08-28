import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

// Containers
import Notifications from '@containers/Notifications';
import { Sudo } from './Company/containers/Sudo';

// Routes
import ROUTES from '@routes';

// Store
import { isAuthorized as getAuthState } from '@store';

// Styles
import styles from './App.scss';

// Views
const Landing = lazy(() => import('Landing/index'));

const Main = lazy(() => import('./Company/pages/Main'));
const Profile = lazy(() => import('./Profile'));
const Sign = lazy(() => import('./Company/pages/Sign'));

const App: React.FC<{}> = () => {
  const isAuthorized = useSelector(getAuthState);

  return (
    <div className={styles.Root}>
      <Suspense fallback="">
        {isAuthorized ? (
          <Switch>
            <Redirect from={ROUTES.SIGN.ROOT} to="/" />
            <Route component={Profile} path="/profile" />
            <Route component={Main} path="/" />
          </Switch>
        ) : (
          <Switch>
            <Route component={Landing} exact path={ROUTES.ROOT} />
            <Route component={Sign} path={ROUTES.SIGN.ROOT} />

            <Redirect to={ROUTES.ROOT} />
          </Switch>
        )}
      </Suspense>

      <Notifications />
      <Sudo />
    </div>
  );
};

export default App;
