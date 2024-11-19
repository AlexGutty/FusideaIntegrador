import React from 'react';
import ReactDOM from 'react-dom/client';
import PasswordReset from '@/auth/components/PasswordReset'; 
import '@/index.css';
import '@/assets/styles/global.css';

const PasswordReset = () => {
  return (
    <div>
 
      <main className="bg-white">
        <PasswordReset /> {/* Formulario de Login */}
      </main>

    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PasswordReset />
  </React.StrictMode>
);