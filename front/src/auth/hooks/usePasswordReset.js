import { useState } from 'react';

/**
 * Hook personalizado para manejar la lógica de restablecimiento de contraseña.
 *
 * @returns {Object} - Incluye:
 *  - `newPassword`: Estado de la nueva contraseña ingresada.
 *  - `setNewPassword`: Función para actualizar la nueva contraseña.
 *  - `confirmPassword`: Estado para confirmar la nueva contraseña.
 *  - `setConfirmPassword`: Función para actualizar la confirmación de la contraseña.
 *  - `successMessage`: Mensaje de éxito si el restablecimiento es exitoso.
 *  - `errorMessage`: Mensaje de error si ocurre un problema.
 *  - `handleSubmit`: Envía la solicitud de restablecimiento al servidor.
 */

const usePasswordReset = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    if (newPassword !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden');
      return;
    }

    try {
      // Assume we get the reset token from the URL
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');

      const response = await fetch('/api/password-reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword, token }),
      });

      if (!response.ok) {
        throw new Error('Password reset failed');
      }

      setSuccessMessage('Tu contraseña ha sido restablecida exitosamente.');
    } catch (err) {
      setErrorMessage('No se pudo restablecer la contraseña. Por favor, inténtalo de nuevo.');
      console.error('Password reset error:', err);
    }
  };

  return {
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    successMessage,
    errorMessage,
    handleSubmit,
  };
};

export default usePasswordReset;

