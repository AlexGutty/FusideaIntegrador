import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuthState from '../hooks/useAuthState';

const PrivateRoute = () => {
  const { isAuthenticated } = useAuthState();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;