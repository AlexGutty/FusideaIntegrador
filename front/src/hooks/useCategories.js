// src/components/useCategories.js
import { useState } from 'react';

// Hook que retorna los datos de las categorías
const useCategories = () => {
  const [categories] = useState([
    { name: 'Finanzas', image: '/imgs/finance.jpg', link: '/connect?category=finanzas' },
    { name: 'Ejercicio', image: '/imgs/exercise.jpg', link: '/connect?category=ejercicio' },
    { name: 'Arte', image: '/imgs/art.jpg', link: '/connect?category=arte' },
    { name: 'Tecnología', image: '/imgs/technology.jpg', link: '/connect?category=tecnologia' },
    { name: 'Música', image: '/imgs/music.jpg', link: '/connect?category=musica' },
    { name: 'Ciencia', image: '/imgs/science.jpg', link: '/connect?category=ciencia' },
    { name: 'Lenguaje', image: '/imgs/language.jpg', link: '/connect?category=lenguaje' },
    { name: 'Social', image: '/imgs/social.jpg', link: '/connect?category=social' },
  ]);

  return categories;
};

export default useCategories;

