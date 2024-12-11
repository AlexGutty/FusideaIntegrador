import React from 'react';
import ReactDOM from 'react-dom/client';
import PasswordRecoveryForm from '../components/PasswordRecoveryForm'; 
import '../../index.css';
import '../../assets/styles/global.css';

/**
 * vista de recuperación de contraseña.
 * 
 * Muestra el formulario de recuperación de contraseña dentro de un contenedor con fondo blanco.
 * 
 * @returns {JSX.Element} - Renderiza el formulario de recuperación de contraseña dentro del layout.
 */

const PasswordRecovery = () => {
  return (
    <div>
 
      <main className="bg-white">
        <PasswordRecoveryForm /> 
      </main>

    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PasswordRecovery />
  </React.StrictMode>
);
export default PasswordRecovery;
