import React from 'react';
import { Header } from '@/widgets/Header';
import { Cases } from '@/widgets/Cases';
import { Projects } from '@/widgets/Projects';
import { About } from '@/widgets/About';
import { Contact } from '@/widgets/Contact';
import { Footer } from '@/widgets/Footer';

import styles from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Header />
      <Cases />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
