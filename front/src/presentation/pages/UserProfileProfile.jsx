import React, { useState } from 'react';
import { AvatarProfile } from '../components/AvatarProfile';
import { BannerProfile } from '../components/BannerProfile';
import { ProfileFormProfile } from '../components/ProfileFormProfile';
import { CertificationsForm } from '../components/CertificationsForm';
import { CollaborativeProjectsForm } from '../components/CollaborativeProjectsForm';
import useUser  from '../hooks/useUser';

const UserProfileProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { 
    user, 
    isLoading,
    error,
    updateUser, 
    updateAvatar, 
    updateBanner, 
    addCertification, 
    addCollaborativeProject 
  } = useUser(1); // Pasamos un ID de usuario fijo para este ejemplo

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error al cargar los datos</div>;
  if (!user) return null;

  const handleSubmit = (data) => {
    updateUser(data);
    setIsEditing(false);
  };

  const handleCertificationSubmit = (data) => {
    addCertification(data);
  };

  const handleProjectSubmit = (data) => {
    addCollaborativeProject(data);
  };

  return (
    <div className="container mx-auto p-4 max-w-8xl">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <BannerProfile user={user} updateBanner={updateBanner} />
        <div className="relative pt-16 px-6 pb-6">
          <div className="absolute -top-16 left-6">
            <AvatarProfile user={user} updateAvatar={updateAvatar} />
          </div>
          <div className="mt-4">
            <h1 className="text-3xl font-bold">{`${user.name} ${user.last_name}`}</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
          
          {isEditing ? (
            <ProfileFormProfile user={user} onSubmit={handleSubmit} />
          ) : (
            <div className="mt-6">
              <button 
                onClick={() => setIsEditing(true)}
                className="mb-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
              >
                Editar Perfil
              </button>
              <UserDetails user={user} />
            </div>
          )}

          <div className="mt-8 space-y-8">
            <CertificationsForm 
              certifications={user.certifications || []} 
              onSubmit={handleCertificationSubmit} 
            />
            
            <CollaborativeProjectsForm 
              projects={user.collaborativeProjects || []} 
              onSubmit={handleProjectSubmit} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const UserDetails = ({ user }) => (
  <div className="bg-gray-50 p-6 rounded-lg shadow mt-6">
    <h2 className="text-xl font-semibold mb-4">Detalles del Usuario</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div><strong>Especialidad:</strong> {user.id_speciality}</div>
      <div><strong>Rol:</strong> {user.id_role}</div>
      <div><strong>Género:</strong> {user.gender}</div>
      <div><strong>Teléfono:</strong> {user.phoneNumber}</div>
      <div className="md:col-span-2"><strong>Sobre mí:</strong> {user.aboutname}</div>
      <div><strong>Email verificado:</strong> {user.email_verified ? 'Sí' : 'No'}</div>
      <div><strong>Calificación promedio:</strong> {user.average_rating}</div>
    </div>
  </div>
);

export default UserProfileProfile;