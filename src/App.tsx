import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

// Styles
import styles from './App.scss';

// Views
import Main from '@views/Main';
import NotFound from '@views/NotFound';
import Sign from '@views/Sign';

// Utils
import { resolve } from '@utils/url';

const App = () => (
  <div className={styles.Root}>
    <Switch>
      <Route component={Sign} path={resolve(['sign'])} />
      <Route component={Main} path="/" />
      <Route component={NotFound} path="*" />
    </Switch>
  </div>
);
export default App;
