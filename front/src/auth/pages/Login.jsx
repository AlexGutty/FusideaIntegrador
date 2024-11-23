import React from 'react';
import LoginForm from '../components/LoginForm'; 
import '../../index.css';
import '../../assets/styles/global.css';

const Login = () => {
  return (
    <div>

      <main className="bg-white">
        <LoginForm /> {/* Formulario de Login */}
      </main>

    </div>
  );
};


export default Login;
