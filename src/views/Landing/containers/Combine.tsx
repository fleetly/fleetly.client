import React from 'react';

// Components
import Wrapper from '../components/Wrapper';

// Styles
import styles from './Combine.scss';

const LandingCombine: React.FC<{}> = () => (
  <Wrapper classes={{ root: styles.Root, container: styles.Container }} />
);

export default LandingCombine;