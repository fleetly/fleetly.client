import React from 'react';

// Containers
import Analyze from './containers/Analyze';
import Combine from './containers/Combine';
import Features from './containers/Features';
import Footer from './containers/Footer';
import Header from './containers/Header';
import Intro from './containers/Intro';
import Try from './containers/Try';

// Styles
import styles from './Landing.scss';

const Landing = () => (
  <div className={styles.Root}>
    <Header />
    <Intro />
    <Combine />
    <Features />

    <div className={styles.Half}>
      <div className={styles.Half} />

      <Analyze />
      <Try />
      <Footer />
    </div>
  </div>
);

export default Landing;
