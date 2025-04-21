import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Card.module.scss';

export interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'shadow';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  padding = 'md',
}) => {
  return (
    <div
      className={clsx(
        styles.card,
        styles[variant],
        padding !== 'none' && styles[`padding-${padding}`],
        className
      )}
    >
      {children}
    </div>
  );
};
