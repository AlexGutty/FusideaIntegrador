import { useState } from 'react';
import api from '../../api/axios'; // Cambia la ruta según la ubicación del archivo

/**
 * Hook personalizado para manejar el registro de usuarios.
 *
 * @returns {Object} - Incluye:
 *  - `formData` y setters para cada campo del formulario (`setIdSpeciality`, `setName`, etc.).
 *  - `successMessage`: Mensaje de éxito si el registro es exitoso.
 *  - `errorMessage`: Mensaje de error si ocurre un problema.
 *  - `handleChange`: Manejador para actualizar los valores de los campos.
 *  - `handleSubmit`: Envía los datos del registro al servidor, validando las contraseñas y manejando errores.
 */

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
