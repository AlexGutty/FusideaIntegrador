import { useState } from 'react';
import api from '../../api/axios';

const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (credentials) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await api.post('/auth/login', credentials); // Envía credenciales al backend
      console.log('Usuario autenticado:', response.data);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.error || 'Error al iniciar sesión');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { login, error, isLoading };
};

export default useLogin;