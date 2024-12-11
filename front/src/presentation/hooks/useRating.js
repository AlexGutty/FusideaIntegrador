import { useState } from 'react';

/**
 * Hook personalizado `useRating`.
 * Este hook maneja el proceso de calificación de un usuario, permitiendo al usuario enviar una calificación,
 * gestionar el estado de la calificación y manejar los posibles estados de éxito, error o pendiente.
 * 
 * @param {Function} onRatingSubmit - Función que se ejecuta después de que la calificación sea enviada con éxito.
 * 
 * @returns {Object} - Un objeto con los siguientes valores y funciones:
 *   @returns {number} rating - La calificación actual del usuario.
 *   @returns {Function} setRating - Función para establecer la calificación.
 *   @returns {string|null} ratingStatus - El estado actual de la calificación (puede ser 'pending', 'success', 'error').
 *   @returns {Function} handleRating - Función que envía la calificación al backend y actualiza el estado.
 * 
 */

const useRating = (onRatingSubmit) => {
  const [rating, setRating] = useState(0);
  const [ratingStatus, setRatingStatus] = useState(null);

  const handleRating = async (userId) => {
    try {
      setRatingStatus('pending');
      const response = await fetch(`/api/users/${userId}/rate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rating }),
      });
      if (!response.ok) throw new Error('Failed to submit rating');
      setRatingStatus('success');
      onRatingSubmit();
    } catch (error) {
      console.error('Error submitting rating:', error);
      setRatingStatus('error');
    }
  };

  return { rating, setRating, ratingStatus, handleRating };
};

export default useRating;

