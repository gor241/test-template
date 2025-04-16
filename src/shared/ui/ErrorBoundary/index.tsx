import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="error-boundary">
          <h2>Что-то пошло не так.</h2>
          <p>Произошла ошибка в приложении. Пожалуйста, обновите страницу или вернитесь позже.</p>
          <button onClick={() => window.location.reload()}>Обновить страницу</button>
          {process.env.NODE_ENV === 'development' && (
            <details>
              <summary>Детали ошибки</summary>
              <pre>{this.state.error?.toString() || 'Unknown error'}</pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
} 