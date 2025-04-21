import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui';
import styles from './NotFoundPage.module.scss';

export const NotFoundPage: FC = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.content}>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.title}>Страница не найдена</h2>
        <p className={styles.message}>
          Извините, страница, которую вы ищете, не существует или была перемещена.
        </p>
        <Link to="/">
          <Button size="lg">На главную</Button>
        </Link>
      </div>
    </div>
  );
};
