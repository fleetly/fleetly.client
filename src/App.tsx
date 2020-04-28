import * as React from 'react';

// Components
import Button, { ButtonVariant } from '@components/Button';
import Link from '@components/Link';
import { H1, H2, H3, H4, H5, H6, P } from '@components/Typography';
import { Input } from '@components/Form';

// Styles
import styles from './App.scss';
import { Color } from '@styles/colors';

const App = () => (
  <div className={styles.Root}>
    <div className={styles.Row}>
      <Input id="id2" name="input" label="Simple" value="some text" />
      <Input
        id="id3"
        name="input"
        label="Error"
        value="some text"
        error="Must contain lower-case latin letters, numbers and dashes!"
      />
      <Input
        id="id4"
        name="input"
        label="Disabled"
        value="some text"
        disabled={true}
      />
      <Input
        id="id5"
        type="password"
        name="input"
        label="Password"
        value="some text"
      />
    </div>

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
        <Button color={Color.Danger} icon="fab fa-vk" />
        <Button color={Color.Primary} icon="fab fa-facebook-f" />
        <Button color={Color.Secondary} icon="fab fa-twitter" />
        <Button color={Color.Success} icon="fab fa-instagram" />
        <Button color={Color.Warning} icon="fab fa-telegram-plane" />
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
        <Button icon="fas fa-eye" variant={ButtonVariant.Filled} />
        <Button
          color={Color.Danger}
          icon="fas fa-power-off"
          variant={ButtonVariant.Filled}
        />
        <Button
          color={Color.Primary}
          icon="fas fa-redo"
          variant={ButtonVariant.Filled}
        />
        <Button
          color={Color.Secondary}
          icon="fas fa-times"
          variant={ButtonVariant.Filled}
        />

        <Button color={Color.Success} icon="1" variant={ButtonVariant.Filled} />
        <Button color={Color.Warning} icon="1" variant={ButtonVariant.Filled} />
      </div>
    </div>
  </div>
);

export default App;
