import * as React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

// Components
import Notification from '@components/Notification';

// Store
import { isAuthorized as getAuthState } from '@store';

// Styles
import styles from './App.scss';

// Views
import Main from '@views/Main';
import NotFound from '@views/NotFound';
import Sign from '@views/Sign';

// Utils
import { resolve } from '@utils/url';

const App = () => {
  const isAuthorized = useSelector(getAuthState);

  return (
    <div className={styles.Root}>
      <Notification
        description="Also on Fleetly you need to add pop-up notifications in any corner."
        title="Notification system"
      />

      <Switch>
        {isAuthorized ? (
          <>
            <Route component={Main} path="/" />
          </>
        ) : (
          <>
            <Route component={Sign} path={resolve(['sign'])} />
            <Redirect to="/sign/in" />
          </>
        )}

        <Route component={NotFound} path="*" />
      </Switch>
    </div>
  );
};

export default App;
