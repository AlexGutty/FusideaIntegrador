import React from 'react';
import SuccessStories from '../components/SuccessStories'; 

/**
 * Página de historias de éxito.
 * Renderiza el componente de historias de éxito, mostrando ejemplos de proyectos exitosos y testimonios.
 * 
 * @returns {JSX.Element} - La página de historias de éxito con los testimonios y casos destacados.
 */

const SuccessStoriesPage = () => {
  return (
    <div>
      <main className=''>
        <SuccessStories /> 
      </main>
    </div>
  );
};


export default SuccessStoriesPage;