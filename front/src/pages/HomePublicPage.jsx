import React from 'react';
import HeroSection from '../components/HeroSection';
import CategoriesCarousel from '../components/CategoriesCarousel';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import FeaturesSection from '../components/FeaturesSection';
import CallToAction from '../components/CallToAction';

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

