import React from 'react';
import useTestimonials from '@/hooks/useTestimonials';

const TestimonialsCarousel = () => {
  const testimonials = useTestimonials();

  return (
    <section className="testimonials-carousel py-10 bg-gray-100">
      <h2 className="text-center text-4xl font-medium text-gray-800 mb-8">Testimonios</h2>
      <div className="slider-testimonials flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item text-center text-gray-800 flex flex-col items-center my-8 px-6">
            <img src={testimonial.image} alt={testimonial.name} className="rounded-full w-56 h-56 mb-8 object-center" />
            <h3 className="text-lg sm:max-w-sm md:max-w-lg lg:max-w-2xl mb-6">{testimonial.testimonial}</h3>
            <span className="text-5xl text-green-400 mb-6">“</span>
            <p className="font-bold text-lg mb-2">{testimonial.name}</p>
            <p className="text-sm">{testimonial.profession}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsCarousel;