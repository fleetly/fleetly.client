import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

// Containers
import Notifications from '@containers/Notifications';

// Routes
import ROUTES from '@routes';

// Store
import { isAuthorized as getAuthState } from '@store';

// Styles
import styles from './App.scss';

// Views
const Landing = lazy(() => import('@views/Landing'));
const Main = lazy(() => import('@views/Main'));
const Sign = lazy(() => import('@views/Sign'));

const App: React.FC<{}> = () => {
  const isAuthorized = useSelector(getAuthState);

  return (
    <div className={styles.Root}>
      <Suspense fallback="">
        {isAuthorized ? (
          <Switch>
            <Redirect from={ROUTES.SIGN.ROOT} to="/" />
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
    </div>
  );
};

export default App;
