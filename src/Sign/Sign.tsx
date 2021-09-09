import React from 'react';
import { Route, RouteChildrenProps, Switch, Redirect } from 'react-router-dom';

// Store
import { useSession } from '@store';

// Styles
import styles from './Sign.scss';

// Utils
import { resolve } from '@utils/url';

// Views
import { SignConfirm } from './pages/Confirm';
import { SignIn } from './pages/In';
import { SignProfile } from './pages/Profile';
import { SignUp } from './pages/Up';

const Sign: React.FC<RouteChildrenProps> = ({ match }) => {
  // Setup
  const { isAuthorized, isConfirmed, user } = useSession();

  return (
    <div className={styles.Root}>
      <div className={styles.Sidebar}>
        {isAuthorized && !isConfirmed ? (
          <Switch>
            <Route
              component={SignConfirm}
              path={resolve([match!.url, 'confirm'])}
            />
            <Redirect from="/sign" to="/sign/confirm" />
          </Switch>
        ) : isAuthorized && !user.username ? (
          <Switch>
            <Route
              component={SignProfile}
              path={resolve([match!.url, 'profile'])}
            />
            <Redirect from="/sign" to="/sign/profile" />
          </Switch>
        ) : isAuthorized ? (
          <Switch>
            <Route
              component={SignConfirm}
              path={resolve([match!.url, 'confirm'])}
            />
            <Redirect from="/sign" to="/sign/confirm" />
          </Switch>
        ) : (
          <Switch>
            <Route component={SignIn} path={resolve([match!.url, 'in'])} />
            <Route component={SignUp} path={resolve([match!.url, 'up'])} />
            <Redirect from="/sign" to="/sign/in" />
          </Switch>
        )}
      </div>
    </div>
  );
};

export default Sign;
