import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/shared/ui';
import styles from './Header.module.scss';

export interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Link to="/" className={styles.logo}>
            FSD Starter
          </Link>
          
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li>
                <Link to="/" className={styles.navLink}>
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className={styles.navLink}>
                  О проекте
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}; 