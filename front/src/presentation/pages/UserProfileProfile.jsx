import React, { useState } from 'react';
import { useUser } from '../hooks/useUser';
import { AvatarProfile } from '../components/AvatarProfile';
import { BannerProfile } from '../components/BannerProfile';
import { ProfileFormProfile } from '../components/ProfileFormProfile';

const UserProfileProfile = () => {
  const userId = 1; 
  const { user, isLoading, error, updateUser, updateAvatar, updateBanner } = useUser(userId);
  const [isEditing, setIsEditing] = useState(false);

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar el perfil</div>;
  if (!user) return null;

  const handleSubmit = (data) => {
    updateUser.mutate(data);
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto p-4">
      <BannerProfile user={user} updateBanner={updateBanner.mutate} />
      <div className="relative -mt-16 ml-4">
        <AvatarProfile user={user} updateAvatar={updateAvatar.mutate} />
      </div>
      <div className="mt-4">
        <h1 className="text-2xl font-bold">{`${user.name} ${user.last_name}`}</h1>
        <p className="text-gray-600">{user.email}</p>
      </div>
      {isEditing ? (
        <ProfileFormProfile user={user} onSubmit={handleSubmit} />
      ) : (
        <div className="mt-4">
          <button 
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Editar Perfil
          </button>
          <UserDetails user={user} />
        </div>
      )}
    </div>
  );
};

const UserDetails = ({ user }) => (
  <div className="mt-4">
    <p><strong>Especialidad:</strong> {user.id_speciality}</p>
    <p><strong>Rol:</strong> {user.id_role}</p>
    <p><strong>Género:</strong> {user.gender}</p>
    <p><strong>Teléfono:</strong> {user.phoneNumber}</p>
    <p><strong>Sobre mí:</strong> {user.aboutname}</p>
    <p><strong>Email verificado:</strong> {user.email_verified ? 'Sí' : 'No'}</p>
    <p><strong>Calificación promedio:</strong> {user.average_rating}</p>
  </div>
);

export default UserProfileProfile;

