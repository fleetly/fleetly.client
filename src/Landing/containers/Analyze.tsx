import React from 'react';

// Assets
import feature3ImgPng from '../assets/features/feature-3.png';
import feature3ImgWebp from '../assets/features/feature-3.webp';

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
        { src: feature3ImgWebp, type: 'image/webp' },
        { src: feature3ImgPng }
      ]}
      title={'Analyze data\nand increase sales'}
    />
  </Wrapper>
);

export default LandingAnalyze;
