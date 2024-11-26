import React from 'react';
import ReactDOM from 'react-dom/client';
import PasswordRecoveryForm from '../components/PasswordRecoveryForm'; 
import '../../index.css';
import '../../assets/styles/global.css';

const PasswordRecovery = () => {
  return (
    <div>
 
      <main className="bg-white">
        <PasswordRecoveryForm /> 
      </main>

    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PasswordRecovery />
  </React.StrictMode>
);
export default PasswordRecovery;
