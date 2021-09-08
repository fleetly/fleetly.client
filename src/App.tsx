import { useQuery } from '@apollo/client';
import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// Containers
import Notifications from '@containers/Notifications';

// GraphQL
import GET_USER from '@graphql/getUserById.gql';

// Interfaces
import { IUser } from '@interfaces/user.interface';

// Routes
import ROUTES from '@routes';

// Store
import { useSession } from '@store';

// Styles
import styles from './App.scss';

const Company = lazy(() => import('./Company'));
const Landing = lazy(() => import('./Landing'));
const Profile = lazy(() => import('./Profile'));
const Sign = lazy(() => import('./Sign'));

const App: React.FC<{}> = () => {
  // Setup
  const { isAuthorized, isConfirmed, setUser } = useSession();

  // Data
  useQuery<{ user: IUser }>(GET_USER, {
    onCompleted: (res) => setUser(res.user)
  });

  return (
    <div className={styles.Root}>
      <Suspense fallback="">
        {isAuthorized && isConfirmed ? (
          <Switch>
            <Redirect from={ROUTES.SIGN.ROOT} to="/" />

            <Route component={Profile} path="/profile" />
            <Route component={Company} path="/:companyId?" />
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
