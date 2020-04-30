import * as React from 'react';
import { CSSTransition } from 'react-transition-group';

// Components
import { H1, H2 } from '@components/Typography';

// Styles
import styles from './Sign.scss';

const Sign = () => {
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
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Sign;
