import { AppProviders } from './providers';
import { Router } from './router';
import './styles/index.scss';

export const App = () => {
  return (
    <AppProviders>
      <Router />
    </AppProviders>
  );
};

export default App; 