import { useState } from 'react';

/**
 * Hook personalizado para gestionar el estado de apertura/cierre de un menú.
 * Utiliza un estado `isMenuOpen` para controlar si el menú está abierto o cerrado.
 * 
 * @returns {Object} - Un objeto que contiene:
 *   - `isMenuOpen` (booleano): El estado actual del menú (abierto o cerrado).
 *   - `toggleMenu` (función): Una función que alterna el estado del menú.
 */

const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return { isMenuOpen, toggleMenu };
};

export default useMenu;
