import React from 'react';
import RegisterForm from '../components/RegisterForm'; 
import '../../index.css';
import '../../assets/styles/global.css';

const Register = () => {
  return (
    <div>
      <main className="bg-white">
        <RegisterForm /> {/* Formulario de Login */}
      </main>

    </div>
  );
};

export default Register;
