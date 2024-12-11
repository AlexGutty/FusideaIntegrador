import { useState, useEffect } from 'react';

/**
 * Hook para gestionar el estado de autenticación del usuario y sus datos.
 * Permite verificar la autenticación al cargar la aplicación, 
 * y proporciona funciones para iniciar sesión, cerrar sesión y actualizar el avatar del usuario.
 * Los datos de usuario se almacenan y persisten en `localStorage`.
 * 
 * @returns {Object} - El estado de autenticación (`isAuthenticated`), 
 * los datos del usuario (`user`), y funciones (`login`, `logout`, `updateUserAvatar`).
 */


const useAuthState = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser) {
      setIsAuthenticated(true);
      setUser(storedUser);
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
  };

  const updateUserAvatar = (newAvatarUrl) => {
    const updatedUser = { ...user, avatar: newAvatarUrl };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  return {
    isAuthenticated,
    user,
    login,
    logout,
    updateUserAvatar
  };
};

export default useAuthState;


