// src/hooks/useInView.js
import { useState, useEffect } from 'react';

/**
 * Hook personalizado para detectar cuando un elemento entra en el viewport.
 * Utiliza un IntersectionObserver para establecer un estado `inView` a `true` cuando el elemento especificado es visible en el viewport.
 * 
 * @param {string} element - El selector CSS del elemento a observar.
 * @param {number} threshold - El porcentaje del elemento visible para activar el estado (valor por defecto: 0.5, 50% visible).
 * @returns {boolean} - `true` si el elemento está en vista, de lo contrario `false`.
 */

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
