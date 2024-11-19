import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '@/presentation/components/Header';
import Footer from '@/presentation/components/Footer';
import UserProfile from '@/presentation/pages/UserProfile';
import './index.css';
import '@/assets/styles/global.css';

const Main = () => {
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

