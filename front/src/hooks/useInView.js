// src/hooks/useInView.js
import { useState, useEffect } from 'react';

const useInView = (element, threshold = 0.5) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setInView(true); // Activar cuando el elemento entre en el viewport
          }
        });
      },
      { threshold } // El 50% del elemento debe ser visible
    );

    const target = document.querySelector(element);
    if (target) {
      observer.observe(target); // Comienza a observar el elemento
    }

    return () => {
      if (target) {
        observer.unobserve(target); // Limpiar cuando el componente se desmonta
      }
    };
  }, [element, threshold]);

  return inView;
};

export default useInView;
