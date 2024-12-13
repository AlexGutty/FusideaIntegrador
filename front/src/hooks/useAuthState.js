import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuthState = () => {
  const [user, setUser] = useState(null); // Información del usuario
  const [loading, setLoading] = useState(true); // Estado de carga
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const { data } = await axios.get('/api/auth/me', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(data); // Guarda datos del usuario
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error al verificar autenticación:', error.response?.data || error.message);
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return { user, isAuthenticated, loading };
};

export default useAuthState;

