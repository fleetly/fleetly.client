import React from 'react';

// Assets
import feature1Img from './assets/feature-1.png';
import feature2Img from './assets/feature-2.png';

// Components
import { Wrapper } from '../Common';
import Feature from './components/Item';

// Styles
import styles from './Features.scss';

const LandingFeatures: React.FC<{}> = () => (
  <Wrapper classes={{ root: styles.Root, container: styles.Container }}>
    <Feature
      description="Group customers with tags and add unique information to fields to better understand your audience."
      image={feature1Img}
      title={'Understand\nyour audience'}
    />

    <Feature
      description="Optimize communication with the client on
      basic questions saving time and money."
      image={feature2Img}
      reverse
      title={'Automate\ncommunication flow'}
    />
  </Wrapper>
);

export default LandingFeatures;
