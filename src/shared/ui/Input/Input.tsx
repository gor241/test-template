import { InputHTMLAttributes, FC, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, leftIcon, rightIcon, fullWidth = true, ...props }, ref) => {
    return (
      <div className={clsx(styles.container, fullWidth && styles.fullWidth, className)}>
        {label && <label className={styles.label}>{label}</label>}

        <div className={styles.inputWrapper}>
          {leftIcon && <div className={styles.leftIcon}>{leftIcon}</div>}

          <input
            ref={ref}
            className={clsx(
              styles.input,
              leftIcon && styles.withLeftIcon,
              rightIcon && styles.withRightIcon,
              error && styles.hasError
            )}
            {...props}
          />

          {rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}
        </div>

        {error && <div className={styles.error}>{error}</div>}
      </div>
    );
  }
);
