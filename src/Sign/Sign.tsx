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
import { SignUp } from './pages/Up';

const Sign: React.FC<RouteChildrenProps> = ({ match }) => {
  // Setup
  const { isAuthorized } = useSession();

  return (
    <div className={styles.Root}>
      <div className={styles.Sidebar}>
        {isAuthorized ? (
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
