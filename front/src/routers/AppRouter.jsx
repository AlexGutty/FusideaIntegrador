import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header'; 

// Páginas del módulo de autenticación
import Login from '@/auth/pages/Login'; 
import PasswordRecovery from '@/auth/pages/PasswordRecovery';
import PasswordReset from '@/auth/pages/PasswordReset';
import Register from '@/auth/pages/Register';

// Páginas principales de la aplicación
import HomePage from '@/presentation/pages/HomePage'; 
import UserProfilePage from '@/presentation/pages/UserProfilePage'; 

// Páginas adicionales en tu proyecto
import AboutUs from '@/pages/AboutUs'; 
import Trades from '@/pages/Trades'; 

const AppRouter = () => {
  return (
    <Router>
      <Header /> {/* Componente de cabecera */}
      <Routes>
        {/* Rutas principales */}
        <Route path="/" element={<HomePage />} />
        <Route path="/perfil" element={<UserProfilePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/trades" element={<Trades />} />

        {/* Rutas de autenticación */}
        <Route path="/login" element={<Login />} />
        <Route path="/recuperar-contraseña" element={<PasswordRecovery />} />
        <Route path="/restablecer-contraseña" element={<PasswordReset />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
