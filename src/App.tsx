import * as React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

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
      <Switch>
        {isAuthorized ? (
          <>
            <Route component={Main} path="/" />
          </>
        ) : (
          <>
            <Route component={Sign} path={resolve(['sign'])} />
          </>
        )}

        <Route component={NotFound} path="*" />
      </Switch>
    </div>
  );
};

export default App;
