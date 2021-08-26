import React from 'react';

// Assets
import feature1Img from '../../assets/features/feature-1.webp';
import feature2Img from '../../assets/features/feature-2.webp';

// Components
import Wrapper from '@pages/Landing/components/Wrapper';
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
      link
      reverse
      title={'Automate customer\ncommunication flow'}
    />
  </Wrapper>
);

export default LandingFeatures;
