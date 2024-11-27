import { useState } from 'react';

const useTestimonials = () => {
  const [testimonials] = useState([
    {
      name: 'Carlos Rodríguez',
      image: '/imgs/tesm1.png',
      profession: 'Desarrollador Full Stack',
      testimonial: 'Fusidea ha transformado mi carrera. He colaborado en proyectos increíbles y he aprendido más de lo que imaginé posible. La comunidad es increíblemente solidaria y motivadora.'
    },
    {
      name: 'Laura Martínez',
      image: '/imgs/tesm2.png',
      profession: 'Diseñadora UX/UI',
      testimonial: 'Como diseñadora, Fusidea me ha brindado la oportunidad de trabajar en proyectos diversos y desafiantes. La plataforma es intuitiva y la red de profesionales es invaluable.'
    },
    {
      name: 'Javier Sánchez',
      image: '/imgs/tesm3.png',
      profession: 'Emprendedor',
      testimonial: 'Fusidea no solo me ayudó a encontrar colaboradores talentosos para mi startup, sino que también me proporcionó las herramientas y el conocimiento para llevar mi idea al siguiente nivel.'
    }
  ]);

  return testimonials;
};

export default useTestimonials;

