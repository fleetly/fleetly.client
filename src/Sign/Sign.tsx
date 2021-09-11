import React, { useMemo } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import {
  Redirect,
  Route,
  RouteChildrenProps,
  Switch,
  useLocation
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Routes
import { SIGN_ROUTES } from './Sign.routes';

// Store
import { useSession } from '@store';

// Styles
import styles from './Sign.scss';

// Views
import { SignConfirm } from './pages/Confirm';
import { SignIn } from './pages/In';
import { SignProfile } from './pages/Profile';
import { SignUp } from './pages/Up';

const { REACT_APP_GOOGLE_RECAPTCHA_KEY } = process.env;

const Sign: React.FC<RouteChildrenProps> = () => {
  // Setup
  const location = useLocation();
  const { isAuthorized, isConfirmed, user } = useSession();

  // Memo
  const redirectProps = useMemo(() => {
    if (isAuthorized && !isConfirmed) {
      return {
        from: '/sign/(in|up|profile)',
        to: SIGN_ROUTES.CONFIRM
      };
    } else if (isAuthorized && !user?.username) {
      return {
        from: '/sign/(in|up|confirm)',
        to: SIGN_ROUTES.PROFILE
      };
    } else {
      return {
        from: '/sign/(confirm|profile)',
        to: SIGN_ROUTES.IN
      };
    }
  }, [isAuthorized, isConfirmed, user]);

  return (
    <GoogleReCaptchaProvider reCaptchaKey={REACT_APP_GOOGLE_RECAPTCHA_KEY}>
      <div className={styles.Root}>
        <Switch>
          <Redirect exact {...redirectProps} />
        </Switch>

        <div className={styles.Cover}>
          <div className={styles.Tree} />
          <div className={styles.Land} />
          <div className={styles.Rocket} />
        </div>

        <TransitionGroup className={styles.Sidebar}>
          <CSSTransition key={location.key} timeout={600}>
            <Switch location={location}>
              <Route component={SignConfirm} path={SIGN_ROUTES.CONFIRM} />
              <Route component={SignIn} path={SIGN_ROUTES.IN} />
              <Route component={SignProfile} path={SIGN_ROUTES.PROFILE} />
              <Route component={SignUp} path={SIGN_ROUTES.UP} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </GoogleReCaptchaProvider>
  );
};

export default Sign;
