import * as React from 'react';

// Components
import Button from '@components/Button';
import Link from '@components/Link';
import { H1, H2, H3, H4, H5, H6 } from '@components/Typography';
import { Input } from '@components/Form';

// Styles
import styles from './App.scss';

const App = () => (
  <div className={styles.Root}>
    <div className={styles.List}>
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
    </div>

    <div className={styles.List}>
      <div className={styles.Column}>
        <H1>Fleetly</H1>
        <H2>Welcome to!</H2>
        <H3>General</H3>
        <H4>
          Rename <Link>«Rockstar Games»</Link> to something new?
        </H4>
        <H5>Rockstar Games</H5>
        <H6>Softwate Project</H6>
      </div>
    </div>

    <div className={styles.List}>
      <div className={styles.Column}>
        <Button to="/123" variant="outlined">
          Default
        </Button>
      </div>
    </div>
  </div>
);

export default App;
