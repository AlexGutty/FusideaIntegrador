import React from 'react';
import Header from '../../components/Header'; 
import RegisterForm from '../components/RegisterForm'; 
import '../../index.css';
import '../../assets/styles/global.css';

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

export default Register;
