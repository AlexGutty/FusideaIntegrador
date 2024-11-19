// src/components/CategoriesCarousel.jsx
import React from 'react';
import useCategories from '../hooks/useCategories';
import useInView from '../hooks/useInView';

const CategoriesCarousel = () => {
  const categories = useCategories();
  const inView = useInView('.categories-section'); // Ahora se pasa un selector específico

  return (
    <section className={`categories-section component-section py-10 bg-white ${inView ? 'animate-slideInUp' : ''}`}>
      <h2 className="text-center text-4xl font-medium text-gray-800 mb-16">Categorías</h2>
      <div className="slider-categories flex flex-wrap justify-center gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-item w-56 h-56 flex flex-col items-center"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <a href={category.link}>
              <img
                src={category.image}
                alt={category.name}
                className="w-32 h-32 object-cover rounded-md"
              />
              <p className="text-center font-medium text-xl">{category.name}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesCarousel;