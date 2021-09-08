import React from 'react';
import { Route, RouteChildrenProps, Switch, Redirect } from 'react-router-dom';

// Styles
import styles from './Sign.scss';

// Views
import { SignConfirm } from './pages/Confirm';
import { SignIn } from './pages/In';
import { SignUp } from './pages/Up';

// Utils
import { resolve } from '@utils/url';

const Sign: React.FC<RouteChildrenProps> = ({ match }) => (
  <div className={styles.Root}>
    <div className={styles.Sidebar}>
      <Switch>
        <Route
          component={SignConfirm}
          path={resolve([match!.url, 'confirm'])}
        />

        <Route component={SignIn} path={resolve([match!.url, 'in'])} />
        <Route component={SignUp} path={resolve([match!.url, 'up'])} />

        <Redirect from="/sign" to="/sign/in" />
      </Switch>
    </div>
  </div>
);

export default Sign;
