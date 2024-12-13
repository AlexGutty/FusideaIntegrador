import React from 'react';

/**
 * Componente que renderiza el pie de página (footer) de la aplicación.
 * 
 * Incluye el logo de Fusidea, los derechos de autor, y enlaces a los términos de uso y la política de privacidad.
 * Está diseñado para mostrarse centrado, con un fondo verde y texto blanco.
 * El pie de página es responsivo y se adapta al tamaño de pantalla.
 * 
 * @returns {JSX.Element} - Renderiza el pie de página con información de derechos de autor y enlaces legales.
 */

const Footer = () => {
  return (
    <footer className="bg-[#4c9141] text-white py-6">
      <div className="container mx-auto px-4 text-center">
        {/* Logo Section */}
        <a href="/">
          <img
            src="../imgs/logo1.jpg"
            alt="Logo de Fusidea"
            className="mx-auto mb-4 h-16 w-auto border-2 border-white rounded-full bg-white p-2"
          />
        </a>

        {/* Copyright & Legal Information */}
        <div className="flex justify-center items-center mb-4">
          <i className="fa fa-copyright"></i>
          <h1 className="ml-2 text-lg">© 2024 Fusidea - Todos los derechos reservados</h1>
        </div>

        {/* Links Section */}
        <p className="mb-4">
          Al utilizar este sitio, aceptas nuestros{' '}
          <a href="#" className="underline text-white">
            términos de uso
          </a>{' '}
          y nuestra{' '}
          <a href="#" className="underline text-white">
            política de privacidad
          </a>.
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-white hover:text-[#a1d8a6]">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#" className="text-white hover:text-[#a1d8a6]">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#" className="text-white hover:text-[#a1d8a6]">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#" className="text-white hover:text-[#a1d8a6]">
            <i className="fa fa-linkedin"></i>
          </a>
        </div>

        {/* Additional Information */}
        <div className="mt-4">
          <p className="text-sm">Fusidea se dedica a crear conexiones significativas en línea. Explora más sobre nuestras funciones y comunidad.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
