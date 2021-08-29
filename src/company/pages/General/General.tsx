import React from 'react';

// Components
import Button from '@components/Button';
import Page, { Wrapper } from '@components/Page';
import { H4, Text } from '@components/Typography';

// Fragments
import { GeneralUpdate } from './Update';

// Styles
import styles from './General.scss';

export const General = () => (
  <Page className={styles.Root} title="General">
    <GeneralUpdate />

    <Wrapper classes={{ container: styles.Container }} title="Danger zone">
      <section>
        <div className={styles.Content}>
          <H4>Disable this company</H4>

          <Text className={styles.Description} component="div">
            All incoming information will no longer be processed.
          </Text>
        </div>

        <div className={styles.Actions}>
          <Button color="danger" disabled variant="outlined">
            Disable
          </Button>
        </div>
      </section>

      <section>
        <div className={styles.Content}>
          <H4>Delete Company</H4>

          <Text className={styles.Description} component="div">
            Delete your company can have unintended side effects.
          </Text>
        </div>

        <div className={styles.Actions}>
          <Button color="danger" disabled variant="outlined">
            Delete
          </Button>
        </div>
      </section>
    </Wrapper>
  </Page>
);
