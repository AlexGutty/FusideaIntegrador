import React from 'react';
import useRegister from '../hooks/useRegister';

const RegisterForm = () => {
  const { register, error, isLoading } = useRegister();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;
    register({ name: name.value, email: email.value, password: password.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrarse</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="text" name="name" placeholder="Nombre" required />
      <input type="email" name="email" placeholder="Correo electrónico" required />
      <input type="password" name="password" placeholder="Contraseña" required />
      <button type="submit" disabled={isLoading}>Registrarse</button>
    </form>
  );
};

export default RegisterForm;
