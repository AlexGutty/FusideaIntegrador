// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoriesCarousel from '@/components/CategoriesCarousel';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import Footer from '@/components/Footer';
import './index.css';
import '@/assets/styles/global.css';

const Main = () => {
  return (
    <div>
      <Header />
      <main className='bg-white'>
      <HeroSection />
      <CategoriesCarousel />
      <TestimonialsCarousel />
    </main>
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
