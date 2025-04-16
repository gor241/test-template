import { FC } from 'react';
import { Card } from '@/shared/ui';
import styles from './AboutPage.module.scss';

export const AboutPage: FC = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.title}>О проекте</h1>
      
      <section className={styles.section}>
        <h2>FSD React Starter</h2>
        <p>
          Это шаблон для быстрого старта проектов на React с использованием архитектуры Feature-Sliced Design.
          Шаблон подходит для разработки различных типов приложений: от лендингов до сложных веб-приложений и интернет-магазинов.
        </p>
      </section>
      
      <section className={styles.section}>
        <h2>Ключевые особенности</h2>
        
        <div className={styles.features}>
          <Card className={styles.card}>
            <h3>Слоистая архитектура</h3>
            <p>
              Проект организован по принципам FSD с четким разделением на слои:
              app, pages, widgets, features, entities, shared.
            </p>
          </Card>
          
          <Card className={styles.card}>
            <h3>SCSS Modules</h3>
            <p>
              Локальная область видимости стилей, переменные и миксины
              для удобной стилизации компонентов.
            </p>
          </Card>
          
          <Card className={styles.card}>
            <h3>TypeScript</h3>
            <p>
              Полная поддержка TypeScript для обеспечения типобезопасности и
              улучшения разработки.
            </p>
          </Card>
          
          <Card className={styles.card}>
            <h3>Адаптивный дизайн</h3>
            <p>
              Готовые миксины и утилиты для создания адаптивных интерфейсов под
              любые устройства.
            </p>
          </Card>
        </div>
      </section>
      
      <section className={styles.section}>
        <h2>Использованные технологии</h2>
        <ul className={styles.list}>
          <li>React 19</li>
          <li>TypeScript</li>
          <li>SCSS Modules</li>
          <li>React Router</li>
          <li>Vite</li>
          <li>ESLint & Prettier</li>
        </ul>
      </section>
    </div>
  );
}; 