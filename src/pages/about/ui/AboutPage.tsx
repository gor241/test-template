import { FC } from 'react';
// import { Card } from '@/shared/ui';
import styles from './AboutPage.module.scss';

export const AboutPage: FC = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.title}>О проекте</h1>
    </div>
  );
};
