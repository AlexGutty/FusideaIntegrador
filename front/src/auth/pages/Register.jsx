import React from 'react';
import RegisterForm from '../components/RegisterForm'; 
import '../../index.css';
import '../../assets/styles/global.css';

/**
 * vista para el registro de un nuevo usuario.
 * 
 * Renderiza el formulario de registro dentro de un contenedor con fondo blanco.
 * 
 * @returns {JSX.Element} - Renderiza el formulario para registrar un nuevo usuario dentro del layout.
 */

const Register = () => {
  return (
    <div>
      <main className="bg-white">
        <RegisterForm /> {/* Formulario de Login */}
      </main>

    </div>
  );
};

export default Register;
