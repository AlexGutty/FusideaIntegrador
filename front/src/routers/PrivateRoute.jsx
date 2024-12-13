// src/routers/PrivateRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Importa el hook actualizado

const PrivateRoute = () => {
  const { user, loading } = useAuth(); // Obtén el usuario y el estado de carga

  if (loading) {
    // Puedes reemplazar esto con un componente de carga personalizado
    return <div className="flex justify-center items-center h-screen">Cargando...</div>;
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
