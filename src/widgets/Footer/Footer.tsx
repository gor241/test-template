import { FC } from 'react';
import { Container } from '@/shared/ui';
import styles from './Footer.module.scss';

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <div className={styles.copyright}>
            &copy; {currentYear} FSD Starter. Все права защищены.
          </div>

          <div className={styles.links}>
            <a href="#" className={styles.link}>
              Политика конфиденциальности
            </a>
            <a href="#" className={styles.link}>
              Условия использования
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
