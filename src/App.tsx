import * as React from 'react';

// Components
import Button, { ButtonVariant } from '@components/Button';
import Link from '@components/Link';
import { H1, H2, H3, H4, H5, H6, P } from '@components/Typography';

// Styles
import styles from './App.scss';
import { Color } from '@styles/color';

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
        <Button color={Color.Danger}>Danger</Button>
        <Button color={Color.Primary}>Primary</Button>
        <Button color={Color.Secondary}>Secondary</Button>
        <Button color={Color.Success}>Success</Button>
        <Button color={Color.Warning}>Success</Button>
      </div>

      <div className={styles.Column}>
        <Button icon="1" />
        <Button color={Color.Danger} icon="1" />
        <Button color={Color.Primary} icon="1" />
        <Button color={Color.Secondary} icon="1" />
        <Button color={Color.Success} icon="1" />
        <Button color={Color.Warning} icon="1" />
      </div>

      <div className={styles.Column}>
        <Button variant={ButtonVariant.Filled}>Default</Button>
        <Button color={Color.Danger} variant={ButtonVariant.Filled}>
          Danger
        </Button>
        <Button color={Color.Primary} variant={ButtonVariant.Filled}>
          Primary
        </Button>
        <Button color={Color.Secondary} variant={ButtonVariant.Filled}>
          Secondary
        </Button>
        <Button color={Color.Success} variant={ButtonVariant.Filled}>
          Success
        </Button>
        <Button color={Color.Warning} variant={ButtonVariant.Filled}>
          Success
        </Button>
      </div>

      <div className={styles.Column}>
        <Button icon="1" variant={ButtonVariant.Filled} />
        <Button color={Color.Danger} icon="1" variant={ButtonVariant.Filled} />
        <Button color={Color.Primary} icon="1" variant={ButtonVariant.Filled} />
        <Button
          color={Color.Secondary}
          icon="1"
          variant={ButtonVariant.Filled}
        />
        <Button color={Color.Success} icon="1" variant={ButtonVariant.Filled} />
        <Button color={Color.Warning} icon="1" variant={ButtonVariant.Filled} />
      </div>
    </div>
  </div>
);

export default App;
