import React from 'react';
import styles from './Cases.module.scss';

// Нужно будет заменить на реальные изображения
const casesData = [
  {
    id: 1,
    title: 'rebranding',
    image: 'https://placehold.co/281x281',
  },
  {
    id: 2,
    title: 'marketing',
    image: 'https://placehold.co/281x281',
  },
  {
    id: 3,
    title: 'lawyer',
    image: 'https://placehold.co/281x281',
  },
  {
    id: 4,
    title: 'startup',
    image: 'https://placehold.co/165x281',
  },
];

export const Cases = () => {
  return (
    <section className={styles.cases}>
      <div className={styles.casesHeader}>
        <div className={styles.verticalLine}></div>
        <h2 className={styles.title}>amazing cases</h2>
      </div>

      <div className={styles.casesGrid}>
        {casesData.map(caseItem => (
          <div key={caseItem.id} className={styles.caseItem}>
            <div className={styles.caseImage}>
              <img src={caseItem.image} alt={caseItem.title} />
            </div>
            <div className={styles.caseTitle}>{caseItem.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
