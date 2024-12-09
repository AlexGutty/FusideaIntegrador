import { useState } from 'react';

const usePasswordRecovery = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/auth/password-recovery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Password recovery request failed');
      }

      setSuccessMessage('Se ha enviado un enlace de recuperación a tu correo electrónico.');
    } catch (err) {
      setErrorMessage(err.message || 'No se pudo procesar la solicitud. Por favor, inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return { email, setEmail, successMessage, errorMessage, isLoading, handleSubmit };
};

export default usePasswordRecovery ;