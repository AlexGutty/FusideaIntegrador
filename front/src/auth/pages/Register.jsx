import React from 'react';
import RegisterForm from '../components/RegisterForm';

/**
 * vista para el registro de un nuevo usuario.
 * 
 * Renderiza el formulario de registro dentro de un contenedor con fondo blanco.
 * 
 * @returns {JSX.Element} - Renderiza el formulario para registrar un nuevo usuario dentro del layout.
 */

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;

