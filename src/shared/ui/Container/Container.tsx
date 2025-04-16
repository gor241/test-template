import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Container.module.scss';

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'fluid';
}

export const Container: FC<ContainerProps> = ({
  children,
  className,
  size = 'lg',
}) => {
  return (
    <div
      className={clsx(
        styles.container,
        styles[size],
        className
      )}
    >
      {children}
    </div>
  );
}; 