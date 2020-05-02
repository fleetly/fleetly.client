import * as React from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

// Components
import { H1, H2, H3 } from '@components/Typography';

// Styles
import styles from './Sign.scss';

// Views
import In from './containers/In';
import Up from './containers/Up';

// Utils
import { resolve } from '@utils/url';

const Sign = ({ match }: Sign.Props) => {
  const [isMounted, setMountState] = React.useState(false);

  React.useEffect(() => setMountState(true), []);

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
          <div className={styles.Content}>
            <H2 className={styles.Welcome}>Welcome to</H2>
            <H1 className={styles.Title}>Fleetly</H1>

            <div className={styles.Nav}>
              <NavLink
                activeClassName={styles.NavLinkIsSelected}
                className={styles.NavLink}
                to="/sign/in"
              >
                <H3>Log In</H3>
              </NavLink>

              <NavLink
                activeClassName={styles.NavLinkIsSelected}
                className={styles.NavLink}
                to="/sign/up"
              >
                <H3>Sign Up</H3>
              </NavLink>
            </div>

            <div className={styles.Form}>
              <Switch>
                <Route component={In} path={resolve([match.url, 'in'])} />
                <Route component={Up} path={resolve([match.url, 'up'])} />
                <Redirect from="/sign" to="/sign/in" />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Sign;
