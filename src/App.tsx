import { useQuery } from '@apollo/client';
import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// Components
import Loader from '@components/Loader';

// Containers
import Notifications from '@containers/Notifications';

// GraphQL
import GET_USER from '@graphql/getUserById.gql';

// Interfaces
import { IUser } from '@interfaces/user.interface';

// Routes
import { PROFILE_ROUTES } from '@profile/Profile.routes';
import { SIGN_ROUTES } from '@sign/Sign.routes';

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
  const { setUser } = useSession();

  // Data
  const { data: { user } = {}, loading } = useQuery<{ user: IUser }>(GET_USER, {
    onCompleted: (res) => setUser(res.user)
  });

  return loading ? (
    <Loader />
  ) : (
    <div className={styles.Root}>
      <Suspense fallback="">
        {!!user && user.isConfirmed && user.username ? (
          <Switch>
            <Redirect from={SIGN_ROUTES.ROOT} to="/" />

            <Route component={Profile} path={PROFILE_ROUTES.ROOT} />
            <Route component={Company} path="/:companyId?" />
          </Switch>
        ) : (
          <Switch>
            <Route component={Landing} exact path="/" />
            <Route component={Sign} path={SIGN_ROUTES.ROOT} />

            <Redirect to="/" />
          </Switch>
        )}
      </Suspense>

      <Notifications />
    </div>
  );
};

export default App;
