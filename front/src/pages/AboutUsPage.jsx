import React from 'react';
import AboutUs from '../components/AboutUs'; 

/**
 * Componente de la página "Acerca de Nosotros" que renderiza la sección AboutUs.
 * Sirve como contenedor principal para la información de la página.
 * 
 * @returns {JSX.Element} - El componente que muestra la sección AboutUs dentro del `main` de la página.
 */


const AboutUsPage = () => {
  return (
    <div>
      <main className=''>
        <AboutUs /> 
      </main>
    </div>
  );
};


export default AboutUsPage;
