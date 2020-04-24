import * as React from 'react';

// Components
import Button from '@components/Button';

// Styles
import styles from './App.scss';
import { COLOR } from '@styles/color';

const App = () => (
  <div className={styles.Root}>
    <h1>Hello World!</h1>

    <div className={styles.List}>
      <Button>Default</Button>
      <Button color={COLOR.DANGER}>Danger</Button>
      <Button color={COLOR.PRIMARY}>Primary</Button>
      <Button color={COLOR.SECONDARY}>Secondary</Button>
      <Button color={COLOR.SUCCESS}>Success</Button>
    </div>
  </div>
);

export default App;
