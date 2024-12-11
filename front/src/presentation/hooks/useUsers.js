import { useState, useEffect } from 'react';

/**
 * Hook personalizado `useUsers`.
 * Este hook maneja la obtención de datos de usuarios desde una API. Se encarga de cargar la lista de usuarios,
 * manejar los estados de carga y error, y permite volver a obtener los usuarios si es necesario.
 * 
 * @returns {Object} - Un objeto con los siguientes valores y funciones:
 *   @returns {Array} users - Lista de usuarios obtenida de la API.
 *   @returns {boolean} loading - Indicador de carga (true cuando los usuarios están siendo cargados).
 *   @returns {string|null} error - Mensaje de error si ocurrió algún problema al obtener los usuarios.
 *   @returns {Function} refetchUsers - Función para volver a cargar la lista de usuarios.
 */

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/users');
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { users, loading, error, refetchUsers: fetchUsers };
};

export default useUsers;

