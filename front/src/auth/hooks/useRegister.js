import { useState } from 'react';

// Custom hook para manejar el formulario de registro
const useRegister = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [about, setAbout] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación básica
    if (password !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden');
      return;
    }

    // Aquí se integraría la lógica del backend
    // Ejemplo: const response = await fetch(...)

    setSuccessMessage('Cuenta creada con éxito');
    setErrorMessage('');
  };

  return {
    name,
    lastName,
    email,
    password,
    confirmPassword,
    phoneNumber,
    about,
    errorMessage,
    successMessage,
    setName,
    setLastName,
    setEmail,
    setPassword,
    setConfirmPassword,
    setPhoneNumber,
    setAbout,
    handleSubmit,
  };
};

export default useRegister;
