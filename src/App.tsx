import * as React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

// Routes
import ROUTES from '@routes';

// Store
import { isAuthorized as getAuthState } from '@store';

// Styles
import styles from './App.scss';

// Views
import Main from '@views/Main';
import Sign from '@views/Sign';

const App = () => {
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
          <Route component={Sign} path={ROUTES.SIGN.ROOT} />
          <Redirect to={ROUTES.SIGN.IN} />
        </Switch>
      )}
    </div>
  );
};

export default App;
