import { useState } from 'react';

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

