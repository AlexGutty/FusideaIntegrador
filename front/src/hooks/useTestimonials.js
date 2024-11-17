import { useState } from 'react';

const useTestimonials = () => {
  const [testimonials] = useState([
    {
      name: 'Liam Anderson',
      image: '/imgs/tesm1.png',
      profession: 'Ingeniero de Software',
      testimonial: '¡Fusidea ha transformado mi carrera profesional! Gracias a su comunidad de expertos, he adquirido conocimientos valiosos...'
    },
    {
      name: 'Maya Williams',
      image: '/imgs/tesm2.png',
      profession: 'Diseñadora Gráfica',
      testimonial: '¡La experiencia en Fusidea ha sido fenomenal! He descubierto nuevas áreas de interés y he podido profundizar en temas que siempre me han fascinado...'
    },
    {
      name: 'Sophia Hayes',
      image: '/imgs/tesm3.png',
      profession: 'Periodista',
      testimonial: '¡No puedo recomendar Fusidea lo suficiente! La diversidad de expertos y la calidad del contenido han superado mis expectativas...'
    }
  ]);

  return testimonials;
};

export default useTestimonials;