import React from 'react';
import Header from '../../components/Header'; 
import LoginForm from '../components/LoginForm'; 
import '../../index.css';
import '../../assets/styles/global.css';

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


export default Login;
