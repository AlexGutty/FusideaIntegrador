import React, { useState, useEffect } from 'react';
import useCategories from '../hooks/useCategories';
import useInView from '../hooks/useInView';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

/**
 * Componente que muestra un carrusel de categorías.
 * 
 * Utiliza un hook personalizado `useCategories` para obtener las categorías y `useInView` 
 * para detectar si la sección está en vista y activar la animación de entrada.
 * Cada categoría se presenta con una imagen circular y un título, que al hacer hover se escala ligeramente y cambia de color.
 * Las categorías se organizan en una cuadrícula responsiva que se ajusta según el tamaño de pantalla.
 * 
 * @returns {JSX.Element} - Renderiza un carrusel de categorías que se anima al estar en vista.
 */

const CategoriesCarousel = () => {
  const categories = useCategories();
  const inView = useInView('.categories-section');
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(categories.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [categories.length]);

  return (
    <section className={`categories-section py-20 bg-gray-100 ${inView ? 'animate-fadeIn' : ''}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-[#4c9141] mb-16">Explora Nuestras Categorías</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array(totalSlides).fill().map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 flex justify-center space-x-20">
                  {categories.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((category, index) => (
                    <div key={index} className="category-item flex flex-col items-center">
                      <a href={category.link} className="group">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 border-4 border-[#4c9141] group-hover:border-[#3a6f32] transition duration-300">
                          <img
                            src={category.image}
                            alt={category.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-center font-semibold text-lg md:text-xl text-[#4c9141] group-hover:text-[#3a6f32]">
                          {category.name}
                        </p>
                      </a>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            <ChevronLeftIcon className="h-6 w-6 text-[#4c9141]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            <ChevronRightIcon className="h-6 w-6 text-[#4c9141]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesCarousel;








