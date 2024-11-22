import React from 'react';
import ProfileBanner from './ProfileBanner';
import ProfileInfo from './ProfileInfo';
import SectionItem from './SectionItem';

const UserProfile = ({ profileData }) => (
  <div className="max-w-4xl mx-auto mt-10 bg-white rounded-lg shadow-lg overflow-hidden">
    <ProfileBanner profileImage={profileData.profileImage} />

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
