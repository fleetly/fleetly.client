import * as React from 'react';

// Components
import Button from '@components/Button';
import { H1, H2, H3, H4, H5, H6, P } from '@components/Typography';

// Styles
import styles from './App.scss';
import { COLOR } from '@styles/color';

const App = () => (
  <div className={styles.Root}>
    <div className={styles.List}>
      <H1>Hello wolrd!</H1>
      <H2>Hello wolrd!</H2>
      <H3>Hello wolrd!</H3>
      <H4>Hello wolrd!</H4>
      <H5>Hello wolrd!</H5>
      <H6>Hello wolrd!</H6>
      <P>All incoming information will no longer be processed.</P>
    </div>

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
