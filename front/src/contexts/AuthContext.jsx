import React, { createContext, useState, useEffect } from 'react';
import api from '../api/axios'; // Importa la instancia de Axios configurada

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const { data } = await api.get('/auth/me', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(data);
        }
      } catch (error) {
        console.error('Error al verificar autenticación', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = async (credentials) => {
    try {
      const { data } = await api.post('/auth/login', credentials); // Usa la instancia de Axios
      localStorage.setItem('token', data.token);
      setUser(data.user);
    } catch (error) {
      console.error('Error al iniciar sesión:', error.response?.data || error.message);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
