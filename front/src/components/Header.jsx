import React from 'react';
import useMenu from '@/hooks/useMenu';
import useAuthState from '@/hooks/useAuthState';

const Header = () => {
  const { isMenuOpen, toggleMenu } = useMenu();
  const { isAuthenticated, user, logout } = useAuthState();

  return (
    <header className="sticky top-0 bg-white shadow z-50">
      <div className="flex flex-col md:flex-row items-center justify-between p-4 mx-auto max-w-7xl">
        {/* Logo */}
        <a href="../html/index.php">
          <img src="../imgs/logo1.jpg" alt="Logo" className="h-12 w-auto rounded mb-4 md:mb-0" />
        </a>

        {/* Menu Button */}
        <button
          id="menu-btn"
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          id="menu"
          className={`md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <a
            href="/"
            className="smky-btn3 relative hover:text-[#FFCA28] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 after:transition-all after:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#2170C0] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600"
          >
            Home
          </a>
          {isAuthenticated ? (
            <>
              <a
                href="/connect"
                className="smky-btn3 relative hover:text-[#FFCA28] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 after:transition-all after:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#2170C0] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600"
              >
                Conecta
              </a>
              <a
                href="/trades"
                className="smky-btn3 relative hover:text-[#FFCA28] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 after:transition-all after:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#2170C0] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600"
              >
                Trades
              </a>
              <a
                href="/about"
                className="smky-btn3 relative hover:text-[#FFCA28] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 after:transition-all after:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#2170C0] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600"
              >
                About Us
              </a>
            </>
          ) : (
            <>
              <a
                href="#"
                className="smky-btn3 relative hover:text-[#FFCA28] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 after:transition-all after:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#2170C0] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600"
              >
                Colaboradores
              </a>
              <a
                href="#"
                className="smky-btn3 relative hover:text-[#FFCA28] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 after:transition-all after:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#2170C0] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600"
              >
                Trades
              </a>
              <a
                href="../html/about.php"
                className="smky-btn3 relative hover:text-[#FFCA28] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 after:transition-all after:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#2170C0] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600"
              >
                Nosotros
              </a>
            </>
          )}
        </nav>

        {/* Authentication or User Menu */}
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
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Ir a mi perfil
                  </a>
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
          <div id="auth-buttons" className="hidden md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <a href="../authentication/login.php">
              <button className="smky-btn3 relative hover:text-[#13437F] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 after:transition-all after:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#4CAF50] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600">
                Iniciar Sesión
              </button>
            </a>
            <a href="../authentication/register.php">
              <button className="smky-btn3 relative hover:text-[#13437F] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 after:transition-all after:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#4CAF50] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600">
                Registrarse
              </button>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
