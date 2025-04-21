import React from 'react';
import styles from './Contact.module.scss';

const socialLinks = [
  {
    id: 1,
    name: 'figma',
    icon: '🎨',
    url: 'https://figma.com/@username',
  },
  {
    id: 2,
    name: 'linkedin',
    icon: '💼',
    url: 'https://linkedin.com/in/username',
  },
  {
    id: 3,
    name: 'instagram',
    icon: '📸',
    url: 'https://instagram.com/username',
  },
  {
    id: 4,
    name: 'github',
    icon: '💻',
    url: 'https://github.com/username',
  },
  {
    id: 5,
    name: 'dribbble',
    icon: '🏀',
    url: 'https://dribbble.com/username',
  },
  {
    id: 6,
    name: 'youtube',
    icon: '▶️',
    url: 'https://youtube.com/@username',
  },
];

export const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.contactHeader}>
          <h2 className={styles.title}>contact me</h2>
          <div className={styles.verticalLine}></div>
        </div>

        <div className={styles.socialGrid}>
          {socialLinks.map(social => (
            <a
              key={social.id}
              href={social.url}
              className={styles.socialLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.socialIcon}>{social.icon}</span>
              <span className={styles.socialName}>{social.name}</span>
            </a>
          ))}
        </div>

        <div className={styles.serviceButton}>
          <span>order of service</span>
          <div className={styles.buttonLine}></div>
        </div>
      </div>
    </section>
  );
};
