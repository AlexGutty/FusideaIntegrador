import React from 'react';
import LoginForm from '../components/LoginForm';

/**
 * vista de Login.
 * 
 * Muestra el formulario de inicio de sesión dentro de un contenedor con fondo blanco.
 * 
 * @returns {JSX.Element} - Renderiza el formulario de login dentro del layout.
 */

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;


