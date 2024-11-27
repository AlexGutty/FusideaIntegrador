import React, { useState } from 'react';
import useUsers from '../hooks/useUsers';
import useCollaboration from '../hooks/UseCollaboration';
import useRating from '../hooks/useRating';
import ProfileCard from '../components/ProfileCard';
import RatingModal from '../components/RatingModal';

const UserDirectory = () => {
  const { users, loading, error, refetchUsers } = useUsers();
  const { collaborationStatus, handleAddCollaborator } = useCollaboration();
  const [selectedUser, setSelectedUser] = useState(null);
  const { rating, setRating, ratingStatus, handleRating } = useRating(refetchUsers);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Directorio de Usuarios Fusidea</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <ProfileCard
            key={user.id}
            user={user}
            onAddCollaborator={handleAddCollaborator}
            onRate={() => setSelectedUser(user)}
          />
        ))}
      </div>
      {selectedUser && (
        <RatingModal
          user={selectedUser}
          rating={rating}
          onRatingChange={setRating}
          onSubmit={() => handleRating(selectedUser.id)}
          onClose={() => setSelectedUser(null)}
        />
      )}
      {collaborationStatus && (
        <div className={`fixed bottom-4 right-4 p-4 rounded-md ${
          collaborationStatus === 'success' ? 'bg-green-500' : 'bg-red-500'
        } text-white`}>
          {collaborationStatus === 'success' ? 'Collaboration request sent!' : 'Failed to send collaboration request'}
        </div>
      )}
      {ratingStatus && (
        <div className={`fixed bottom-4 left-4 p-4 rounded-md ${
          ratingStatus === 'success' ? 'bg-green-500' : 'bg-red-500'
        } text-white`}>
          {ratingStatus === 'success' ? 'Rating submitted successfully!' : 'Failed to submit rating'}
        </div>
      )}
    </div>
  );
};

export default UserDirectory;
