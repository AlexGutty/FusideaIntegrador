import React from 'react';
import LoginForm from '../components/LoginForm'; 
import '../../index.css';
import '../../assets/styles/global.css';

/**
 * vista de Login.
 * 
 * Muestra el formulario de inicio de sesión dentro de un contenedor con fondo blanco.
 * 
 * @returns {JSX.Element} - Renderiza el formulario de login dentro del layout.
 */

const Login = () => {
  return (
    <div>

      <main className="bg-white">
        <LoginForm /> {/* Formulario de Login */}
      </main>

    </div>
  );
};


export default Login;
