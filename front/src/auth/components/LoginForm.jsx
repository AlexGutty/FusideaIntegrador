import React from 'react';
import useLoginForm from '../hooks/useLoginForm';

const LoginForm = () => {
  const { login, error, isLoading } = useLoginForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    console.log('Datos enviados:', { email, password }); // Verifica los datos antes de enviarlos

    login({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="email" name="email" placeholder="Correo electrónico" required />
      <input type="password" name="password" placeholder="Contraseña" required />
      <button type="submit" disabled={isLoading}>Iniciar Sesión</button>
    </form>
  );
};

export default LoginForm;
