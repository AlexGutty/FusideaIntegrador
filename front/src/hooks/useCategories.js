import { useState } from 'react';

const useCategories = () => {
  const [categories] = useState([
    { name: 'Tecnología', image: '/imgs/technology.jpg', link: '/connect?category=tecnologia' },
    { name: 'Diseño', image: '/imgs/design.jpg', link: '/connect?category=diseno' },
    { name: 'Marketing', image: '/imgs/marketing.jpg', link: '/connect?category=marketing' },
    { name: 'Negocios', image: '/imgs/finance.jpg', link: '/connect?category=negocios' },
    { name: 'Educación', image: '/imgs/language.jpg', link: '/connect?category=educacion' },
    { name: 'Ciencia', image: '/imgs/science.jpg', link: '/connect?category=ciencia' },
    { name: 'Arte', image: '/imgs/art.jpg', link: '/connect?category=arte' },
    { name: 'Sostenibilidad', image: '/imgs/exercise.jpg', link: '/connect?category=sostenibilidad' },
  ]);

  return categories;
};

export default useCategories;

