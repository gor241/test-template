import React from 'react';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>mrk.</div>

        <div className={styles.headerRight}>
          <button className={styles.selfService}>
            <span>self service</span>
            <div className={styles.selfServiceLine}></div>
            <span className={styles.discount}>20% off</span>
          </button>
        </div>

        <h1 className={styles.heading}>front-end.web(developer)</h1>

        <nav className={styles.nav}>
          <div className={styles.navItem}>
            <div className={styles.activeIndicator}></div>
            <span>home</span>
          </div>
          <div className={styles.navItem}>
            <span>cases</span>
          </div>
          <div className={styles.navItem}>
            <span>projects</span>
          </div>
          <div className={styles.navItem}>
            <span>about me</span>
          </div>
          <div className={styles.navItem}>
            <span>contact</span>
          </div>
        </nav>

        <button className={styles.darkModeToggle}>dark mode.</button>
      </div>
    </header>
  );
};
