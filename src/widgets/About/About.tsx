import React from 'react';
import styles from './About.module.scss';

// Данные по навыкам
const experienceData = [
  {
    title: "I've had experiences with",
    items: [
      'Firebase Database',
      'MySQL Database',
      'GIT, GitHub, Bitbucket',
      'Coding PHP',
      'Figma, Adobe XD, Sketch',
      'CSS Preprocessors',
      'Digital Marketing',
      'Coding Python (Django)',
    ],
  },
  {
    title: 'I have years of experience with',
    items: [
      'Coding HTML5',
      'Coding CSS3',
      'Coding WordPress',
      'Coding JavaScript',
      'Using Elementor',
      'Using Adobe Package',
      'Creating Brand and Logo',
      'Creating User Interface',
    ],
  },
  {
    title: 'I work and study about',
    items: [
      'Coding React.js',
      'Coding CSS3',
      'Coding JavaScript',
      'Coding TypeScript',
      'Studying Node.js basics',
      'Studying API RESTful',
      'Studying User Experience',
    ],
  },
];

// Данные о технологиях
const techData = [
  {
    title: 'Interface & Design',
    description: 'Briefing, wireframe, UX, UI and branding.',
    icon: '🎨',
  },
  {
    title: 'html & css',
    description: 'Responsive websites with fast loading.',
    icon: '🌐',
  },
  {
    title: 'React.js',
    description: 'Build your system with node.js.',
    icon: '⚛️',
  },
  {
    title: 'WordPress',
    description: 'Create your e-commerce or blog with PHP.',
    icon: '📝',
  },
];

export const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.aboutHeader}>
          <h2 className={styles.title}>about me</h2>
          <div className={styles.verticalLine}></div>
        </div>

        <div className={styles.bio}>
          <div className={styles.avatarContainer}>
            <img src="https://placehold.co/198x198" alt="Profile" className={styles.avatar} />
          </div>

          <div className={styles.bioContent}>
            <h3 className={styles.name}>Marcos Oliveira</h3>
            <p className={styles.bioText}>
              I'm more than one in love for Front-End. My experience with interface design turn me
              one extremely criterious with alignments, margins, colors and a lot other resorces in
              CSS. Today I work with projects in a whole world. Codifiding in my home office, in a
              quiet interior of São Paulo, Brazil.
            </p>
            <div className={styles.socialLinks}>instagram github email</div>
          </div>
        </div>

        <div className={styles.techGrid}>
          {techData.map((tech, index) => (
            <div key={index} className={styles.techCard}>
              <div className={styles.techIcon}>{tech.icon}</div>
              <div className={styles.techContent}>
                <div className={styles.techLine}></div>
                <h4 className={styles.techTitle}>{tech.title}</h4>
                <p className={styles.techDescription}>{tech.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.experienceGrid}>
          {experienceData.map((experience, index) => (
            <div key={index} className={styles.experienceCard}>
              <div className={styles.experienceLine}></div>
              <h4 className={styles.experienceTitle}>{experience.title}</h4>
              <ul className={styles.experienceList}>
                {experience.items.map((item, idx) => (
                  <li key={idx} className={styles.experienceItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
