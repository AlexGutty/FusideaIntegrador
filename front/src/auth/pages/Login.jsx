import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from '@/components/Header'; 
import LoginForm from '@/auth/components/LoginForm'; 
import '@/index.css';
import '@/assets/styles/global.css';

const Login = () => {
  return (
    <div>
      <Header /> 
      <main className="bg-white">
        <LoginForm /> {/* Formulario de Login */}
      </main>

    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
