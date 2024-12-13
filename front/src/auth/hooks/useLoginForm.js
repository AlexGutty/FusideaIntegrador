import { useState } from 'react';
import api from '../../api/axios';

const useLoginForm = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (credentials) => {
    setIsLoading(true);
    setError(null);

    try {
      console.log('Datos enviados al backend:', credentials); // Verifica los datos enviados
      const { data } = await api.post('/auth/login', credentials); // Envío de solicitud
      console.log('Respuesta del backend:', data); // Verifica la respuesta
    } catch (err) {
      setError(err.response?.data?.error || 'Error al iniciar sesión');
    } finally {
      setIsLoading(false);
    }
  };

  return { login, error, isLoading };
};

export default useLoginForm;
