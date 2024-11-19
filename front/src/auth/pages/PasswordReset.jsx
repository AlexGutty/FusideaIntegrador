import React from 'react';
import PasswordResetForm from '../components/PasswordResetForm'; 
import '../../index.css';
import '../../assets/styles/global.css';

const PasswordReset = () => {
  return (
    <div>
 
      <main className="bg-white">
        <PasswordResetForm /> {/* Formulario de Login */}
      </main>

    </div>
  );
};

export default PasswordReset;
