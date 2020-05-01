import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

// Styles
import styles from './App.scss';

// Views
import Sign from '@views/Sign';

// Utils
import { resolve } from '@utils/url';

const App = () => (
  <div className={styles.Root}>
    <Switch>
      <Route component={Sign} path={resolve(['sign'])} />
    </Switch>
  </div>
);

export default App;
