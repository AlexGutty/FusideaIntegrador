import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Trades from './pages/Trades';
import Login from './auth/pages/Login';
import PasswordRecovery from './auth/pages/PasswordRecovery';
import PasswordReset from './auth/pages/PasswordReset';
import Register from './auth/pages/Register';
import HomePage from './presentation/pages/HomePage';
import UserProfilePage from './presentation/pages/UserProfilePage';
import Header from './components/Header';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import { ProjectProvider } from './contexts/ProjectContext'; // Agregado para proyectos
import './index.css';

// Componente para manejar errores globales
const ErrorBoundary = ({ children }) => {
  try {
    return children;
  } catch (error) {
    console.error('Error in application:', error);
    return <div>Something went wrong. Please try again later.</div>;
  }
};

const App = () => {
  return (
    <AuthProvider>
      <NotificationProvider>
        <ProjectProvider>
          <ErrorBoundary>
            <Router>
              <Header />
              <Routes>
                {/* Ruta principal */}
                <Route path="/" element={<HomePage />} />

                {/* Otras páginas */}
                <Route path="/about" element={<AboutUs />} />
                <Route path="/trades" element={<Trades />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/password-recovery" element={<PasswordRecovery />} />
                <Route path="/password-reset" element={<PasswordReset />} />

                {/* Página de perfil de usuario */}
                <Route path="/user-profile" element={<UserProfilePage />} />

                {/* Página para rutas no encontradas */}
                <Route path="*" element={<div>Page Not Found</div>} />
              </Routes>
              <Footer />
            </Router>
          </ErrorBoundary>
        </ProjectProvider>
      </NotificationProvider>
    </AuthProvider>
  );
};

export default App;
