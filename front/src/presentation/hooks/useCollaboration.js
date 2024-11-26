import { useState } from 'react';

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

