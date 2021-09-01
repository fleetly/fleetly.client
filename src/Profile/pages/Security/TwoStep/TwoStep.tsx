import React from 'react';

// Components
import Button from '@components/Button';
import { Wrapper } from '@components/Page';
import { H4, Text } from '@components/Typography';

// Styles
import styles from './TwoStep.scss';

export const SecurityTwoStep: React.FC = () => (
  <Wrapper
    classes={{ container: styles.Container }}
    title="Two-Step Verification"
  >
    <div>
      <div className={styles.Content}>
        <H4 className={styles.Title}>
          Two-Step verification is not enabled yet
        </H4>

        <Text className={styles.Description} component="div">
          Two-Step verification adds and an additional layer of security to your
          account by requiring more than just a password to Log In.
        </Text>
      </div>

      <Button
        className={styles.Button}
        color="blue"
        disabled
        type="submit"
        variant="outlined"
      >
        Enable
      </Button>
    </div>
  </Wrapper>
);
