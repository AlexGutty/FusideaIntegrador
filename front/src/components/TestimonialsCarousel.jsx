import React from 'react';
import useTestimonials from '../hooks/useTestimonials';
import useInView from '../hooks/useInView';

/**
 * Carrusel de testimonios que muestra lo que los usuarios dicen sobre Fusidea.
 * Los testimonios se cargan dinámicamente y se animan cuando la sección entra en vista.
 * 
 * @returns {JSX.Element} - Renderiza una cuadrícula de testimonios con animación de aparición.
 */

const TestimonialsCarousel = () => {
  const testimonials = useTestimonials();
  const inView = useInView('.testimonials-section');

  return (
    <section className={`testimonials-section py-20 bg-[#e8f3e5] ${inView ? 'animate-fadeIn' : ''}`}>
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold text-[#4c9141] mb-16">Lo Que Dicen Nuestros Usuarios</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-6 border-4 border-[#4c9141]"
              />
              <p className="text-gray-700 mb-6 italic">{testimonial.testimonial}</p>
              <div className="mt-auto">
                <p className="font-bold text-lg text-[#4c9141]">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.profession}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;



