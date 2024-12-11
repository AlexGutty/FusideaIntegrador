import { useState } from 'react';
import axios from 'axios';

/**
 * Hook personalizado para manejar un formulario de inicio de sesión.
 *
 * @returns {Object} - Incluye:
 *  - `formData`: Estado del formulario (email y password).
 *  - `handleChange`: Actualiza el estado en base a los cambios en los inputs.
 *  - `handleSubmit`: Envía el formulario, realiza autenticación y maneja errores.
 *  - `error`: Mensaje de error en caso de fallo.
 *  - `loading`: Indica si la autenticación está en curso.
 */

const useLoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', formData);
      const { token, user } = response.data;

      // Guarda el token en el almacenamiento local
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      // Redirige o maneja el estado de autenticación
      window.location.href = '/dashboard'; // Cambia esta ruta según tu lógica
    } catch (error) {
      setError(
        error.response?.data?.message || 'Ocurrió un error. Por favor, intenta nuevamente.'
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    error,
    loading,
  };
};

export default useLoginForm;
