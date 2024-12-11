import React, { createContext, useState, useEffect } from 'react';

/**
 * Contexto y proveedor de autenticación para gestionar el estado del usuario.
 * Permite mantener el estado de autenticación y gestionar las funciones de login y logout.
 * La autenticación se persiste en `localStorage` para verificar la sesión al cargar la app.
 * 
 * @returns {JSX.Element} - Proveedor de contexto para compartir el estado de autenticación 
 * y las funciones en toda la aplicación.
 */


// Crear el contexto
export const AuthContext = createContext();

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Simular una función para iniciar sesión
  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    // Puedes guardar el token en localStorage o cookies si lo necesitas
  };

  // Función para cerrar sesión
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    // Limpia el token o cualquier otra información en almacenamiento local
  };

  // Verificar si el usuario tiene una sesión activa al cargar la app
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      setIsAuthenticated(true);
      setUser(savedUser);
    }
  }, []);

  // Proveer valores al resto de la app
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

