import React from 'react';
import Banner from '../components/Banner';
import UserCard from '../components/UserCard';
import ChatBubble from '../components/ChatBubble';
import '../../index.css';
import '../../assets/styles/global.css';

const mockUsers = [
  {
    id: 1,
    name: 'Ana García',
    specialty: 'Diseñadora UX/UI',
    profileImage: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: 2,
    name: 'Carlos López',
    specialty: 'Desarrollador Frontend',
    profileImage: 'https://i.pravatar.cc/150?img=2'
  },
  {
    id: 3,
    name: 'Laura Martínez',
    specialty: 'Product Manager',
    profileImage: 'https://i.pravatar.cc/150?img=3'
  },
  {
    id: 4,
    name: 'Miguel Ángel',
    specialty: 'Desarrollador Backend',
    profileImage: 'https://i.pravatar.cc/150?img=4'
  }
];

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-gray-50">
        <Banner />
        
        <div className="max-w-7xl mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockUsers.map((user) => (
              <UserCard
                key={user.id}
                profileImage={user.profileImage}
                name={user.name}
                specialty={user.specialty}
              />
            ))}
          </div>
        </div>

        <ChatBubble />
      </main>
    </div>
  );
};

export default HomePage;