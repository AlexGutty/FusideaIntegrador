import React from 'react';
import { BannerProfile } from './BannerProfile';
import ProfileInfo from './ProfileInfo';
import SectionItem from './SectionItem';

/**
 * Componente `UserProfile`.
 * Muestra el perfil de un usuario, incluyendo su imagen de banner, información del perfil y 
 * secciones adicionales.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.profileData - Datos del perfil del usuario.
 * @param {string} props.profileData.profileImage - URL de la imagen de perfil del usuario.
 * @param {string} props.profileData.name - Nombre del usuario.
 * @param {string} props.profileData.rating - Calificación del usuario.
 * @param {string} props.profileData.description - Descripción del usuario.
 * @param {Array<string>} props.profileData.sections - Lista de títulos de las secciones adicionales.
 * 
 * @returns {JSX.Element} - Renderiza un perfil de usuario con imagen de banner, información básica y secciones.
 */

const UserProfile = ({ profileData }) => (
  <div className="max-w-4xl mx-auto mt-10 bg-white rounded-lg shadow-lg overflow-hidden">
    <BannerProfile profileImage={profileData.profileImage} />

    <div className="px-6 py-4">
      <ProfileInfo
        name={profileData.name}
        rating={profileData.rating}
        description={profileData.description}
      />
    </div>

    <div className="px-6 py-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {profileData.sections.map((section, index) => (
        <SectionItem key={index} title={section} />
      ))}
    </div>
  </div>
);

export default UserProfile;
