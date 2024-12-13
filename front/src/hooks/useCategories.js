import { useState, useEffect } from 'react';

/**
 * Hook que proporciona una lista de categorías con su nombre, imagen y enlace.
 * Cada categoría tiene un nombre, una imagen asociada y un enlace para navegar a la categoría correspondiente.
 * 
 * @returns {Array} - Un array de objetos que representan las categorías disponibles.
 */

const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Simulamos una llamada a la API
    const fetchCategories = async () => {
      // En un escenario real, aquí harías una llamada a tu API
      const mockCategories = [
        { name: 'Tecnología', image: '/imgs/technology.jpg', link: '/connect?category=tecnologia' },
        { name: 'Diseño', image: '/imgs/design.jpg', link: '/connect?category=diseno' },
        { name: 'Marketing', image: '/imgs/marketing.jpg', link: '/connect?category=marketing' },
        { name: 'Negocios', image: '/imgs/finance.jpg', link: '/connect?category=negocios' },
        { name: 'Educación', image: '/imgs/language.jpg', link: '/connect?category=educacion' },
        { name: 'Ciencia', image: '/imgs/science.jpg', link: '/connect?category=ciencia' },
        { name: 'Arte', image: '/imgs/art.jpg', link: '/connect?category=arte' },
        { name: 'Sostenibilidad', image: '/imgs/exercise.jpg', link: '/connect?category=sostenibilidad' },
      ];

      setCategories(mockCategories);
    };

    fetchCategories();
  }, []);

  return categories;
};

export default useCategories;



