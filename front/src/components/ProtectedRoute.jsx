// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    // Puedes reemplazar esto con un componente de carga personalizado
    return <div>Loading...</div>;
  }

  if (!user) {
    // Redirige al usuario a la página de inicio de sesión si no está autenticado
    return <Navigate to="/login" replace />;
  }

  // Renderiza los componentes hijos si el usuario está autenticado
  return children;
};

export default ProtectedRoute;
