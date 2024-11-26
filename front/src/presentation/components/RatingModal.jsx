import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const RatingModal = ({ user, rating, onRatingChange, onSubmit, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Calificar a {user.name}</h2>
        <div className="flex mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon
              key={star}
              className={`h-8 w-8 cursor-pointer ${
                star <= rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
              onClick={() => onRatingChange(star)}
            />
          ))}
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-2 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Cancelar
          </button>
          <button
            onClick={onSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Enviar Calificación
          </button>
        </div>
      </div>
    </div>
  );
};

export default RatingModal;


