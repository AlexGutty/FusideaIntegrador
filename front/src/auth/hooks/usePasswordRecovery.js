import { useState } from 'react';

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