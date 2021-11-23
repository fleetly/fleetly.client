import React from 'react';

// Assets
import feature3Img from '../assets/features/feature-3.webp';
import feature3Img1 from '../assets/features/feature-3.png';

// Components
import { Feature } from './Features';
import Wrapper from '../components/Wrapper';

const LandingAnalyze: React.FC<{}> = () => (
  <Wrapper>
    <Feature
      color="white"
      description="Optimize costs and get the most profitable model
by analyzing customer service data"
      images={[
        {
          src: feature3Img,
          type: 'image/webp'
        },
        {
          src: feature3Img1
        }
      ]}
      title={'Analyze data\nand increase sales'}
    />
  </Wrapper>
);

export default LandingAnalyze;
