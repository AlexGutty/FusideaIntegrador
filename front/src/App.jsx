import React from 'react';
import AppRouter from './routers/AppRouter';
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import { ProjectProvider } from './contexts/ProjectContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

/**
 * Componente principal de la aplicación.
 * Este componente muestra el logo de Vite y React, y un contador que se incrementa
 * cuando el usuario hace clic en el botón.
 * @returns {JSX.Element} El componente que representa la interfaz de usuario con el logo y el contador.
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <NotificationProvider>
        <ProjectProvider>
          <AppRouter />
        </ProjectProvider>
      </NotificationProvider>
    </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;