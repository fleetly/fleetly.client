import React from 'react';

// Assets
import feature3Img from '../assets/features/feature-3.webp';

// Components
import { Feature } from './Features';
import Wrapper from '../components/Wrapper';

const LandingAnalyze: React.FC<{}> = () => (
  <Wrapper>
    <Feature
      color="white"
      description="Optimize costs and get the most profitable model
by analyzing customer service data"
      image={feature3Img}
      title={'Analyze data\nand increase sales'}
    />
  </Wrapper>
);

export default LandingAnalyze;
