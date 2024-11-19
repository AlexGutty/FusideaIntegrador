import { useState } from 'react';

// Custom hook para manejar el formulario de restablecimiento de contraseña
const usePasswordReset = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden');
      return;
    }

    // Aquí se puede agregar la lógica para enviar la nueva contraseña al backend
    setSuccessMessage('Contraseña restablecida con éxito');
    setErrorMessage('');
  };

  return {
    newPassword,
    confirmPassword,
    successMessage,
    errorMessage,
    setNewPassword,
    setConfirmPassword,
    handleSubmit,
  };
};

export default usePasswordReset;

