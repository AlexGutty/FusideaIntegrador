import React from 'react';
import HeroSection from '../components/HeroSection';
import CategoriesCarousel from '../components/CategoriesCarousel';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import FeaturesSection from '../components/FeaturesSection';
import CallToAction from '../components/CallToAction';

/**
 * página pública de inicio.
 * Renderiza las secciones de bienvenida, categorías, características, testimonios y llamada a la acción.
 * 
 * @returns {JSX.Element} - La página de inicio pública con las secciones correspondientes.
 */

const HomePublicPage = () => {
  return (
    <div className="home-public-page animate-slide-down">
      <HeroSection />
      <CategoriesCarousel />
      <FeaturesSection />
      <TestimonialsCarousel />
      <CallToAction />
    </div>
  );
};

export default HomePublicPage;

