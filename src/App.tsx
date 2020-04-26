import * as React from 'react';

// Components
import Button, { BUTTON_VARIANT } from '@components/Button';
import Link from '@components/Link';
import { H1, H2, H3, H4, H5, H6, P } from '@components/Typography';

// Styles
import styles from './App.scss';
import { COLOR } from '@styles/color';

const App = () => (
  <div className={styles.Root}>
    <div className={styles.Column}>
      <H1>Fleetly!</H1>
      <H2>Welcome to!</H2>
      <H3>General</H3>
      <H4>
        Delete <Link to="/">«Rockstar Games»</Link>
      </H4>
      <H5>Disable</H5>
      <H6>Hello wolrd!</H6>
      <P>All incoming information will no longer be processed.</P>
    </div>

    <div className={styles.List}>
      <div className={styles.Column}>
        <Button to="/123">Default</Button>
        <Button color={COLOR.DANGER}>Danger</Button>
        <Button color={COLOR.PRIMARY}>Primary</Button>
        <Button color={COLOR.SECONDARY}>Secondary</Button>
        <Button color={COLOR.SUCCESS}>Success</Button>
        <Button color={COLOR.WARNING}>Success</Button>
      </div>

      <div className={styles.Column}>
        <Button icon="1" />
        <Button color={COLOR.DANGER} icon="1" />
        <Button color={COLOR.PRIMARY} icon="1" />
        <Button color={COLOR.SECONDARY} icon="1" />
        <Button color={COLOR.SUCCESS} icon="1" />
        <Button color={COLOR.WARNING} icon="1" />
      </div>

      <div className={styles.Column}>
        <Button variant={BUTTON_VARIANT.FILLED}>Default</Button>
        <Button color={COLOR.DANGER} variant={BUTTON_VARIANT.FILLED}>
          Danger
        </Button>
        <Button color={COLOR.PRIMARY} variant={BUTTON_VARIANT.FILLED}>
          Primary
        </Button>
        <Button color={COLOR.SECONDARY} variant={BUTTON_VARIANT.FILLED}>
          Secondary
        </Button>
        <Button color={COLOR.SUCCESS} variant={BUTTON_VARIANT.FILLED}>
          Success
        </Button>
        <Button color={COLOR.WARNING} variant={BUTTON_VARIANT.FILLED}>
          Success
        </Button>
      </div>

      <div className={styles.Column}>
        <Button icon="1" variant={BUTTON_VARIANT.FILLED} />
        <Button color={COLOR.DANGER} icon="1" variant={BUTTON_VARIANT.FILLED} />
        <Button
          color={COLOR.PRIMARY}
          icon="1"
          variant={BUTTON_VARIANT.FILLED}
        />
        <Button
          color={COLOR.SECONDARY}
          icon="1"
          variant={BUTTON_VARIANT.FILLED}
        />
        <Button
          color={COLOR.SUCCESS}
          icon="1"
          variant={BUTTON_VARIANT.FILLED}
        />
        <Button
          color={COLOR.WARNING}
          icon="1"
          variant={BUTTON_VARIANT.FILLED}
        />
      </div>
    </div>
  </div>
);

export default App;
