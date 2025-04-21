import { ReactNode } from 'react';
import { ErrorBoundary } from '@/shared/ui/ErrorBoundary';

// Здесь можно добавить контекст темы, аутентификации, состояния и т.д.
interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return <ErrorBoundary>{children}</ErrorBoundary>;
};

export default AppProviders;
