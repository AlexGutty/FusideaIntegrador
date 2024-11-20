import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useMenu from '../hooks/useMenu';
import useAuthState from '../hooks/useAuthState';

const Header = () => {
  const { isMenuOpen, toggleMenu } = useMenu();
  const { isAuthenticated, user, logout } = useAuthState();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Aquí puedes agregar lógica para filtrar resultados o realizar una petición al servidor
    console.log('Buscando:', searchTerm);
  };

  return (
    <header className="sticky top-0 bg-white shadow z-50">
      <div className="flex flex-col md:flex-row items-center justify-between p-4 mx-auto max-w-7xl">
        {/* Logo */}
        <Link to="/">
          <img src="../imgs/logo1.jpg" alt="Logo" className="h-12 w-auto rounded mb-4 md:mb-0" />
        </Link>

        {/* Barra de búsqueda */}
        <div className="flex items-center w-full md:w-auto md:ml-4">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Buscar..."
            className="border rounded px-4 py-2 w-full md:w-64"
          />
        </div>

        {/* Menú y autenticación */}
        <nav
          id="menu"
          className={`md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0 ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <Link to="/" className="text-gray-600 hover:text-blue-500">
            Home
          </Link>
          {isAuthenticated ? (
            <>
              <Link to="/connect" className="text-gray-600 hover:text-blue-500">
                Conecta
              </Link>
              <Link to="/trades" className="text-gray-600 hover:text-blue-500">
                Trades
              </Link>
              <Link to="/about-us" className="text-gray-600 hover:text-blue-500">
                Nosotros
              </Link>
            </>
          ) : (
            <>
              <Link to="/trades" className="text-gray-600 hover:text-blue-500">
                Trades
              </Link>
              <Link to="/about-us" className="text-gray-600 hover:text-blue-500">
                Nosotros
              </Link>
            </>
          )}
        </nav>

        {/* Usuario o autenticación */}
        {isAuthenticated ? (
          <div className="relative group">
            <div className="flex items-center space-x-2 cursor-pointer">
              <img
                src={user.profileImage}
                alt="Profile"
                className="h-10 w-10 rounded-full border-2 border-gray-200"
              />
              <span className="text-gray-800 font-medium">{user.name}</span>
            </div>
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-48 hidden group-hover:block">
              <ul className="py-2">
                <li>
                  <Link to="/perfil" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Ir a mi perfil
                  </Link>
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Cerrar sesión
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-blue-500">
              Iniciar Sesión
            </Link>
            <Link to="/register" className="text-gray-600 hover:text-blue-500">
              Registrarse
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
