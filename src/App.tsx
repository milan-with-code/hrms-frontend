import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
