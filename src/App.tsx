import * as React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

// Containers
import Notifications from '@containers/Notifications';
import Sudo from '@containers/Sudo';

// Routes
import ROUTES from '@routes';

// Store
import { isAuthorized as getAuthState } from '@store';

// Styles
import styles from './App.scss';

// Views
import Landing from '@views/Landing';
import Main from '@views/Main';
import Sign from '@views/Sign';

const App: React.FC<{}> = () => {
  const isAuthorized = useSelector(getAuthState);

  return (
    <div className={styles.Root}>
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

      <Notifications />
      {isAuthorized && <Sudo />}
    </div>
  );
};

export default App;
