import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '@/components/Header'; 
import RegisterForm from '@/auth/components/RegisterForm'; 
import '@/index.css';
import '@/assets/styles/global.css';

const Register = () => {
  return (
    <div>
      <Header /> 
      <main className="bg-white">
        <RegisterForm /> {/* Formulario de Login */}
      </main>

    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>
);
