// src/contexts/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import api from '../api/axios'; // Asegúrate de que esta instancia tenga la baseURL configurada

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Almacena los datos del usuario
  const [loading, setLoading] = useState(true); // Estado de carga inicial
  const [error, setError] = useState(null); // Manejo de errores

  // Verifica la autenticación al montar el componente
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          // Configura el token en Axios
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

          // Realiza una solicitud para obtener los datos del usuario
          const { data } = await api.get('/auth/me');
          setUser(data.user); // Ajusta según la estructura de tu respuesta
        }
      } catch (error) {
        console.error('Error al verificar autenticación', error);
        setUser(null);
        localStorage.removeItem('token'); // Elimina el token si es inválido
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  // Función para iniciar sesión
  const login = async (credentials) => {
    try {
      setLoading(true);
      const { data } = await api.post('/auth/login', credentials);
      localStorage.setItem('token', data.token);
      api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
      setUser(data.user); // Ajusta según la estructura de tu respuesta
      setError(null);
    } catch (error) {
      console.error('Error al iniciar sesión:', error.response?.data || error.message);
      setError(error.response?.data?.message || 'Error al iniciar sesión');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Función para registrar usuario
  const register = async (credentials) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('name', credentials.name);
      formData.append('last_name', credentials.last_name);
      formData.append('email', credentials.email);
      formData.append('password', credentials.password);
      formData.append('gender', credentials.gender);
      formData.append('phoneNumber', credentials.phoneNumber);
      
      if (credentials.avatar) {
        formData.append('avatar', credentials.avatar);
      }
      if (credentials.banner) {
        formData.append('banner', credentials.banner);
      }

      await api.post('/auth/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Opcional: Iniciar sesión automáticamente después del registro
      // await login({ email: credentials.email, password: credentials.password });
    } catch (error) {
      console.error('Error al registrarse:', error.response?.data || error.message);
      setError(error.response?.data?.message || 'Error al registrarse');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    delete api.defaults.headers.common['Authorization'];
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading, error }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
