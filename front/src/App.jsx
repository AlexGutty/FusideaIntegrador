import React from 'react';
import './App.css';
import AppRouter from './routers/AppRouter';
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import { ProjectProvider } from './contexts/ProjectContext';

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <ProjectProvider>
          <AppRouter />
        </ProjectProvider>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;