import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import UserProfile from '../components/UserProfile';
import '../../index.css';
import '../../assets/styles/global.css';

const UserProfilePage = () => {
  return (
    <div>
      <Header />
      <main className="bg-gray-50">
        <UserProfile />
      </main>
      <Footer />
    </div>
  );
};



export default UserProfilePage;