import React from 'react';
import useHeroSection from '../hooks/useHeroSection'; 

const HeroSection = () => {
  const { title, description, buttonStartText, buttonLearnMoreText, logoImg, mainImage } = useHeroSection();

  return (
    <section className='bg-white'>
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
      {/* Sección Izquierda */}
      <div className="md:w-1/2 text-center md:text-left p-8 left-animate">
        <div className="flex items-center justify-center md:justify-start mb-4">
          {/* Logo */}
          <div className="bg-purple-100 rounded-full p-3">
            <img src={logoImg} alt="Icono" className="h-12 w-auto" />
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-4 ">{title}</h1>
        <p className="text-gray-500 mb-8 left-animate">{description}</p>

        <div className="flex flex-col md:flex-row gap-4">
          <a href="#" className="bg-purple-600 text-white py-3 px-6 rounded-md shadow-lg hover:bg-purple-700">{buttonStartText}</a>
          <a href="#" className="text-blue-600 hover:underline py-3 px-6">{buttonLearnMoreText}</a>
        </div>
      </div>

      {/* Sección Derecha (Imagen) */}
      <div className="md:w-1/2 p-8 right-animate">
        <div className="rounded-lg overflow-hidden shadow-lg ">
          <img src={mainImage} alt="Man working on laptop" />
        </div>
      </div>
    </div>
    </section>
  );
};

export default HeroSection;
