import React from 'react';
import useCategories from '../hooks/useCategories';
import useInView from '../hooks/useInView';

const CategoriesCarousel = () => {
  const categories = useCategories();
  const inView = useInView('.categories-section');

  return (
    <section className={`categories-section py-20 bg-gray-100 ${inView ? 'animate-fadeIn' : ''}`}>
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold text-[#4c9141] mb-16">Explora Nuestras Categorías</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="category-item flex flex-col items-center transform transition duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a href={category.link} className="group">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-[#4c9141] group-hover:border-[#3a6f32] transition duration-300">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center font-semibold text-xl text-[#4c9141] group-hover:text-[#3a6f32]">{category.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesCarousel;



