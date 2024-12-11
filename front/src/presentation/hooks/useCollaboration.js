import { useState } from 'react';

/**
 * Hook personalizado `useCollaboration`.
 * Este hook maneja el estado de las colaboraciones, incluyendo la adición de un nuevo colaborador y el seguimiento de su estado.
 * 
 * @returns {Object} - Un objeto con los siguientes valores:
 *   @returns {string|null} collaborationStatus - El estado actual de la colaboración: 'pending' (en espera), 'success' (éxito), o 'error' (fallido).
 *   @returns {Function} handleAddCollaborator - Función para agregar un nuevo colaborador.
 * 
 * @example
 * const { collaborationStatus, handleAddCollaborator } = useCollaboration();
 * 
 * // Uso de la función handleAddCollaborator:
 * handleAddCollaborator(userId);
 */

const useCollaboration = () => {
  const [collaborationStatus, setCollaborationStatus] = useState(null);

  const handleAddCollaborator = async (userId) => {
    try {
      setCollaborationStatus('pending');
      const response = await fetch('/api/collaborations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ collaboratorId: userId }),
      });
      if (!response.ok) throw new Error('Failed to add collaborator');
      setCollaborationStatus('success');
    } catch (error) {
      console.error('Error adding collaborator:', error);
      setCollaborationStatus('error');
    }
  };

  return { collaborationStatus, handleAddCollaborator };
};

export default useCollaboration;

