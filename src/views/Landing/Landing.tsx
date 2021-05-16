import React from 'react';

// Domains
import Combine from './Combine';
import Features from './Features';
import Header from './Header';
import Intro from './Intro';

// Styles
import styles from './Landing.scss';

const Landing = () => (
  <div className={styles.Root}>
    <Header />
    <Intro />
    <Combine />
    <Features />
  </div>
);

export default Landing;
