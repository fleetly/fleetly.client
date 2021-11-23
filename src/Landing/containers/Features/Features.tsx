import React from 'react';

// Assets
import feature1Img from '../../assets/features/feature-1.webp';
import feature2Img from '../../assets/features/feature-2.webp';
import feature1Img1 from '../../assets/features/feature-1.png';
import feature2Img1 from '../../assets/features/feature-2.png';

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
        {
          src: feature1Img,
          type: 'image/webp'
        },
        {
          src: feature1Img1
        }
      ]}
      title={'Understand\nyour audience'}
    />

    <Feature
      description="Optimize communication with the client on
      basic questions saving time and money."
      images={[
        {
          src: feature2Img,
          type: 'image/webp'
        },
        {
          src: feature2Img1
        }
      ]}
      link
      reverse
      title={'Automate customer\ncommunication flow'}
    />
  </Wrapper>
);

export default LandingFeatures;
