import React from 'react';
import ReactDOM from 'react-dom/client';
import PasswordRecovery from '@/auth/components/PasswordRecoveryForm'; 
import '@/index.css';
import '@/assets/styles/global.css';

const PasswordRecovery = () => {
  return (
    <div>
 
      <main className="bg-white">
        <PasswordRecovery /> {/* Formulario de Login */}
      </main>

    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PasswordRecovery />
  </React.StrictMode>
);