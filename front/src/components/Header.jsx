import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useMenu from '../hooks/useMenu';
import useAuthState from '../hooks/useAuthState';
import { HomeIcon, UserGroupIcon, CurrencyDollarIcon, DocumentDuplicateIcon, AcademicCapIcon, UserCircleIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const { isMenuOpen, toggleMenu } = useMenu();
  const { isAuthenticated, user, logout } = useAuthState();
  const [searchTerm, setSearchTerm] = useState('');
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);
  const location = useLocation();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log('Buscando:', e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsProfileMenuOpen(false);
  }, [location]);

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const navLinkClasses = (path) =>
    `flex items-center px-4 py-2 rounded-lg transition-colors duration-200 font-medium ${
      isActivePath(path)
        ? 'bg-[#e8f3e5] text-[#4c9141]'
        : 'text-gray-600 hover:bg-[#f0f9ed] hover:text-[#4c9141]'
    }`;

  const authButtonClasses = "flex items-center px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105";

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="flex flex-col md:flex-row items-center justify-between p-4 mx-auto max-w-7xl">
        {/* Logo */}
        <Link to="/" className="transform transition-transform duration-200 hover:scale-105">
          <img src="../imgs/logo1.jpg" alt="Logo" className="h-12 w-auto rounded-lg shadow-sm" />
        </Link>

        {/* Search Bar - Solo visible cuando está autenticado */}
        {isAuthenticated && (
          <div className="flex items-center w-full md:w-auto md:ml-4 my-4 md:my-0">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Buscar..."
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-[#4c9141] focus:ring-2 focus:ring-[#e8f3e5] transition-all duration-200 outline-none"
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        )}

        {/* Navigation Menu */}
        <nav className={`md:flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 ${
          isMenuOpen ? 'flex' : 'hidden md:flex'
        }`}>
          <Link to="/" className={navLinkClasses('/')}>
            <HomeIcon className="w-5 h-5 mr-2" />
            Home
          </Link>
          {isAuthenticated ? (
            <>
              <Link to="/connect" className={navLinkClasses('/connect')}>
                <UserGroupIcon className="w-5 h-5 mr-2" />
                Conecta
              </Link>
              <Link to="/my-trades" className={navLinkClasses('/trades')}>
                <CurrencyDollarIcon className="w-5 h-5 mr-2" />
                Trades
              </Link>
              <Link to="/templates" className={navLinkClasses('/templates')}>
                <DocumentDuplicateIcon className="w-5 h-5 mr-2" />
                Plantillas
              </Link>
              <Link to="/courses" className={navLinkClasses('/courses')}>
                <AcademicCapIcon className="w-5 h-5 mr-2" />
                Cursos
              </Link>
            </>
          ) : (
            <>
              <Link to="/trades" className={navLinkClasses('/trades')}>
                <CurrencyDollarIcon className="w-5 h-5 mr-2" />
                Trades
              </Link>
              <Link to="/about-us" className={navLinkClasses('/about-us')}>
                <UserGroupIcon className="w-5 h-5 mr-2" />
                Nosotros
              </Link>
            </>
          )}
        </nav>

        {/* User Profile or Auth Buttons */}
        {isAuthenticated ? (
          <div className="relative" ref={profileMenuRef}>
            <button
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-[#f0f9ed] transition-colors duration-200"
            >
              <img
                src={user?.avatar || 'https://via.placeholder.com/40'}
                alt="Profile"
                className="h-10 w-10 rounded-full border-2 border-[#4c9141] object-cover"
              />
              <span className="text-gray-800 font-medium">{user?.name || 'Usuario'}</span>
            </button>
            
            <div className={`absolute right-0 mt-2 w-56 ${
              isProfileMenuOpen ? 'block' : 'hidden'
            }`}>
              <div className="py-1 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <Link
                  to="/my-profile"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-[#f0f9ed] transition-colors duration-200"
                >
                  <UserCircleIcon className="w-5 h-5 mr-2 text-[#4c9141]" />
                  Ir a mi perfil
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center w-full text-left px-4 py-2 text-[#4c9141] hover:bg-[#f0f9ed] transition-colors duration-200"
                >
                  <ArrowRightOnRectangleIcon className="w-5 h-5 mr-2" />
                  Cerrar sesión
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex space-x-3">
            <Link
              to="/login"
              className={`${authButtonClasses} bg-[#4c9141] text-white hover:bg-[#3a6f32]`}
            >
              <UserCircleIcon className="w-5 h-5 mr-2" />
              Iniciar Sesión
            </Link>
            <Link
              to="/register"
              className={`${authButtonClasses} border-2 border-[#4c9141] text-[#4c9141] hover:bg-[#f0f9ed]`}
            >
              <UserGroupIcon className="w-5 h-5 mr-2" />
              Registrarse
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;