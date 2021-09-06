import React, { useEffect, useState } from 'react';
import { Route, RouteChildrenProps, Switch, Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

// Styles
import styles from './Sign.scss';

// Views
import { SignIn } from './pages/In';
import { SignUp } from './pages/Up';

// Utils
import { resolve } from '@utils/url';

const Sign: React.FC<RouteChildrenProps> = ({ match }) => {
  const [isMounted, setMountState] = useState(false);

  useEffect(() => setMountState(true), []);

  return (
    <CSSTransition
      classNames={{
        enter: styles.RootTransitionEnter,
        enterActive: styles.RootTransitionEnterActive
      }}
      in={isMounted}
      mountOnEnter={true}
      timeout={2800}
    >
      <div className={styles.Root}>
        <div className={styles.Cover}>
          <div className={styles.Land1} />
          <div className={styles.Land2} />
          <div className={styles.Tree} />
        </div>

        <div className={styles.Wrapper}>
          <Switch>
            <Route component={SignIn} path={resolve([match!.url, 'in'])} />
            <Route component={SignUp} path={resolve([match!.url, 'up'])} />

            <Redirect from="/sign" to="/sign/in" />
          </Switch>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Sign;
