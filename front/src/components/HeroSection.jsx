import React from 'react';
import useHeroSection from '../hooks/useHeroSection';

/**
 * Sección principal (HeroSection) con el logo, título, descripción y botones de acción.
 * Presenta una imagen principal y animaciones de entrada para mejorar la experiencia visual.
 * 
 * @returns {JSX.Element} - Renderiza la sección de bienvenida.
 */

const HeroSection = () => {
  const { title, description, buttonStartText, buttonLearnMoreText, logoImg, mainImage } = useHeroSection();

  return (
    <section className='bg-gradient-to-b from-[#4c9141] to-white py-20'>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left p-8 animate-fadeIn">
          <div className="flex items-center justify-center md:justify-start mb-6">
            <div className="bg-white rounded-full p-3 shadow-lg">
              <img src={logoImg} alt="Fusidea Logo" className="h-16 w-auto" />
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-6 text-white">{title}</h1>
          <p className="text-xl text-gray-100 mb-8">{description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#" className="bg-white text-[#4c9141] py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1">{buttonStartText}</a>
            <a href="#" className="text-white border-2 border-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#4c9141] hover:bg-opacity-50 transition duration-300 ease-in-out">{buttonLearnMoreText}</a>
          </div>
        </div>

        <div className="md:w-1/2 p-8 animate-slideInRight">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img src={mainImage} alt="Collaborative work" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


