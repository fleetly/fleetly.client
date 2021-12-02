import React from 'react';

// Assets
import feature1ImgPng from '../../assets/features/feature-1.png';
import feature1ImgWebp from '../../assets/features/feature-1.webp';

import feature2ImgPng from '../../assets/features/feature-2.png';
import feature2ImgWebp from '../../assets/features/feature-2.webp';

// Components
import Wrapper from 'Landing/components/Wrapper';
import Feature from './components/Item';

// Styles
import styles from './Features.scss';

const LandingFeatures: React.FC<{}> = () => (
  <Wrapper classes={{ root: styles.Root, container: styles.Container }}>
    <Feature
      description="Group customers with tags and add unique information to fields to better understand your audience."
      images={[
        { src: feature1ImgWebp, type: 'image/webp' },
        { src: feature1ImgPng }
      ]}
      title={'Understand\nyour audience'}
    />

    <Feature
      description="Optimize communication with the client on
      basic questions saving time and money."
      images={[
        { src: feature2ImgWebp, type: 'image/webp' },
        { src: feature2ImgPng }
      ]}
      link
      reverse
      title={'Automate customer\ncommunication flow'}
    />
  </Wrapper>
);

export default LandingFeatures;
