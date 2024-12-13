import { useState } from 'react';
import api from '../../api/axios'; // Cambia la ruta según la ubicación del archivo

const useRegister = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const register = async (credentials) => {
    setIsLoading(true);
    setError(null);
    try {
      await api.post('/auth/register', credentials); // Usa la instancia de Axios
      alert('Usuario registrado con éxito');
    } catch (err) {
      setError(err.response?.data?.error || 'Error al registrarse');
    } finally {
      setIsLoading(false);
    }
  };

  return { register, error, isLoading };
};

export default useRegister;
