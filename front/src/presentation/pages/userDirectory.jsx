import React, { useState } from 'react';
import useUsers from '../hooks/useUsers';
import useCollaboration from '../hooks/UseCollaboration';
import useRating from '../hooks/useRating';
import ProfileCard from '../components/ProfileCard';
import RatingModal from '../components/RatingModal';

/**
 * Componente `UserDirectory` que muestra una lista de usuarios disponibles en la plataforma Fusidea. 
 * Los usuarios se presentan en tarjetas con opciones para agregar colaboradores y calificar usuarios. 
 * El componente también maneja el estado de las interacciones de colaboración y calificación, 
 * mostrando mensajes de éxito o error según el resultado de estas acciones.
 * 
 * Este componente utiliza varios hooks personalizados:
 * - `useUsers`: Obtiene la lista de usuarios y su estado de carga o error.
 * - `useCollaboration`: Permite gestionar la colaboración entre usuarios, con la opción de agregar colaboradores.
 * - `useRating`: Permite calificar a los usuarios, mostrando una ventana modal para la calificación.
 * @returns {JSX.Element} - El componente que renderiza el directorio de usuarios con sus respectivas interacciones.
 */

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

