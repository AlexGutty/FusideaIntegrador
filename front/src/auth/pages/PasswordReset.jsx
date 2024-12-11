import React from 'react';
import PasswordResetForm from '../components/PasswordResetForm'; 
import '../../index.css';
import '../../assets/styles/global.css';

/**
 * vista para restablecer la contraseña.
 * 
 * Renderiza el formulario de restablecimiento de contraseña dentro de un contenedor con fondo blanco.
 * 
 * @returns {JSX.Element} - Renderiza el formulario para restablecer la contraseña dentro del layout.
 */

const PasswordReset = () => {
  return (
    <div>
 
      <main className="bg-white">
        <PasswordResetForm /> {/* Formulario de Login */}
      </main>

    </div>
  );
};

export default PasswordReset;
