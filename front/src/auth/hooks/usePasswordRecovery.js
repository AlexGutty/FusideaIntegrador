import { useState } from 'react';

// Custom hook para manejar el formulario de recuperación de contraseña
const usePasswordRecovery = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Aquí se puede integrar la lógica de backend para enviar el correo de recuperación
    // Ejemplo: const response = await fetch(...)

    setSuccessMessage('Enlace de recuperación enviado con éxito');
    setErrorMessage('');
  };

  return {
    email,
    errorMessage,
    successMessage,
    setEmail,
    handleSubmit,
  };
};

export default usePasswordRecovery;
