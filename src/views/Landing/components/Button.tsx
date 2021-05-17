import React from 'react';

// Components
import { Text } from '@components/Typography';

// Styles
import styles from './Button.scss';

const LandingButton: React.FC<{}> = ({ children }) => (
  <button className={styles.Root}>
    <Text component="div" medium size="large">
      {children}
    </Text>
  </button>
);

export default LandingButton;
