import { FC } from 'react';
import { Card, Button } from '@/shared/ui';
import styles from './HomePage.module.scss';

export const HomePage: FC = () => {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <h1>FSD React Starter</h1>
        <p className={styles.subtitle}>
          Быстрый старт для вашего проекта с Feature-Sliced Design
        </p>
      </section>

      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Возможности</h2>
        
        <div className={styles.grid}>
          <Card className={styles.card}>
            <h3>FSD архитектура</h3>
            <p>
              Методология Feature-Sliced Design для организации кода в сложных приложениях.
            </p>
          </Card>
          
          <Card className={styles.card}>
            <h3>React + TypeScript</h3>
            <p>
              Современная разработка интерфейсов с типизацией и высокой надежностью.
            </p>
          </Card>
          
          <Card className={styles.card}>
            <h3>SCSS Modules</h3>
            <p>
              Стили с модульной системой и переменными для удобной разработки.
            </p>
          </Card>
        </div>
      </section>

      <section className={styles.cta}>
        <Card variant="shadow" className={styles.ctaCard}>
          <h2>Начните разработку прямо сейчас</h2>
          <p>
            Шаблон для быстрого старта проектов любой сложности.
          </p>
          <div className={styles.actions}>
            <Button size="lg">Документация</Button>
            <Button variant="outline" size="lg">GitHub</Button>
          </div>
        </Card>
      </section>
    </div>
  );
}; 