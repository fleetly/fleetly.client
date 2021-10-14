import { useLazyQuery } from '@apollo/client';
import React, { Suspense, lazy, useEffect } from 'react';
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

// Utils
import { isWEBPSupported } from '@utils/support';

const Company = lazy(() => import('./Company'));
const Landing = lazy(() => import('./Landing'));
const Profile = lazy(() => import('./Profile'));
const Sign = lazy(() => import('./Sign'));

const App: React.FC<{}> = () => {
  // Setup
  const { isAuthorized, setUser, user } = useSession();

  // Data
  const [getUser, { loading }] = useLazyQuery<{
    user: IUser;
  }>(GET_USER, {
    onCompleted: (res) => setUser(res.user)
  });

  // Effects
  useEffect(() => {
    // @todo - сделать более разумную функцию по саппортингу
    isWEBPSupported() && document.body.classList.add('webp-supported');
  }, []);

  useEffect(() => {
    isAuthorized && getUser();
  }, [getUser, isAuthorized]);

  return loading ? (
    <Loader />
  ) : (
    <div className={styles.Root}>
      <Suspense fallback="">
        <Switch>
          {(!isAuthorized || !user?.isConfirmed || !user?.username) && (
            <Route component={Sign} path={SIGN_ROUTES.ROOT} />
          )}

          {isAuthorized ? (
            <Switch>
              {user && (!user?.isConfirmed || !user?.username) ? (
                <Redirect to={SIGN_ROUTES.ROOT} />
              ) : (
                <Redirect from={SIGN_ROUTES.ROOT} to="/" />
              )}

              <Route component={Profile} path={PROFILE_ROUTES.ROOT} />
              <Route component={Company} path="/:companyId?" />
            </Switch>
          ) : (
            <Switch>
              <Route component={Landing} exact path="/" />
              <Redirect to="/" />
            </Switch>
          )}
        </Switch>
      </Suspense>

      <Notifications />
    </div>
  );
};

export default App;
