import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

// Components
import { H1, H2 } from '@components/Typography';

// Styles
import styles from './Sign.scss';

// Views
import In from './containers/In';

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

            <div className={styles.Form}>
              <Switch>
                <Route component={In} path={resolve([match.url, 'in'])} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Sign;
