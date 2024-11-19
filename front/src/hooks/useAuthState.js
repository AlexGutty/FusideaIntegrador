import { useState, useEffect } from 'react';

// Simulamos una función de autenticación
const fetchUserData = () => {
  // Aquí puedes reemplazar con una llamada real a tu API o almacenamiento local
  const user = JSON.parse(localStorage.getItem('user'));
  return user;
};

const useAuthState = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = fetchUserData();

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

  return {
    isAuthenticated,
    user,
    login,
    logout
  };
};

export default useAuthState;
