import * as React from 'react';
import { Link } from 'react-router-dom';

// Components
import Button from '@components/Button';
import { H1, H2, H3, P } from '@components/Typography';

// Styles
import styles from './NotFound.scss';

const NotFound = () => (
  <div className={styles.Root}>
    <header className={styles.Header}>
      <Link className={styles.Link} to="/">
        <div className={styles.Logo} />
        <H3 className={styles.Brand}>Fleetly</H3>
      </Link>
    </header>

    <div className={styles.Content}>
      <H2 className={styles.Oops}>Ooops</H2>

      <H1 className={styles.Title}>Sorry</H1>

      <P className={styles.Description}>
        You may have misstyped the address
        <br />
        or the page may have moved.
      </P>

      <div className={styles.Actions}>
        <Button color="primary" to="/">
          To Home
        </Button>
      </div>
    </div>
  </div>
);

export default NotFound;
