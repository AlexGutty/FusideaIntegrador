import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#4c9141] text-white py-8">
      <div className="flex flex-col items-center text-center">
        <a href="/">
          <img src="../imgs/logo1.jpg" alt="Logo de Fusidea" className="mx-auto mb-4 h-12" />
        </a>
        <div className="flex justify-center items-center">
          <i className="fa fa-copyright"></i>
          <h1 className="ml-2 text-lg">© 2024 Fusidea - Todos los derechos reservados</h1>
        </div>
        <p className="mt-4">
          Al utilizar este sitio, aceptas nuestros{' '}
          <a href="#" className="underline text-white">
            términos de uso
          </a>{' '}
          y nuestra{' '}
          <a href="#" className="underline text-white">
            política de privacidad
          </a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
