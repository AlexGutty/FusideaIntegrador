import { useState } from 'react';

/**
 * Hook personalizado para manejar la lógica de recuperación de contraseña.
 *
 * @returns {Object} - Incluye:
 *  - `email`: Estado del correo electrónico ingresado.
 *  - `setEmail`: Función para actualizar el estado del correo electrónico.
 *  - `successMessage`: Mensaje de éxito si la solicitud se realiza correctamente.
 *  - `errorMessage`: Mensaje de error si ocurre un problema.
 *  - `handleSubmit`: Envía la solicitud de recuperación al servidor.
 */

const usePasswordRecovery = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('/api/password-recovery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Password recovery request failed');
      }

      setSuccessMessage('Se ha enviado un enlace de recuperación a tu correo electrónico.');
    } catch (err) {
      setErrorMessage('No se pudo procesar la solicitud. Por favor, inténtalo de nuevo.');
      console.error('Password recovery error:', err);
    }
  };

  return { email, setEmail, successMessage, errorMessage, handleSubmit };
};

export default usePasswordRecovery;