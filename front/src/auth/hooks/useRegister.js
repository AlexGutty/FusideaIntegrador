import { useState } from 'react';

const useRegister = () => {
  const [formData, setFormData] = useState({
    id_speciality: '',
    id_role: '',
    name: '',
    last_name: '',
    email: '',
    gender: '',
    phoneNumber: '',
    aboutname: '',
    password: '',
    confirmPassword: '',
    avatar: null,
    banner: null,
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden');
      return;
    }

    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        if (key !== 'confirmPassword') {
          formDataToSend.append(key, formData[key]);
        }
      }

      const response = await fetch('/api/register', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      setSuccessMessage('Registro exitoso. Por favor, inicia sesión.');
    } catch (err) {
      setErrorMessage('No se pudo completar el registro. Por favor, inténtalo de nuevo.');
      console.error('Registration error:', err);
    }
  };

  return {
    ...formData,
    setIdSpeciality: (value) => handleChange({ target: { name: 'id_speciality', value } }),
    setIdRole: (value) => handleChange({ target: { name: 'id_role', value } }),
    setName: (value) => handleChange({ target: { name: 'name', value } }),
    setLastName: (value) => handleChange({ target: { name: 'last_name', value } }),
    setEmail: (value) => handleChange({ target: { name: 'email', value } }),
    setGender: (value) => handleChange({ target: { name: 'gender', value } }),
    setPhoneNumber: (value) => handleChange({ target: { name: 'phoneNumber', value } }),
    setAboutname: (value) => handleChange({ target: { name: 'aboutname', value } }),
    setPassword: (value) => handleChange({ target: { name: 'password', value } }),
    setConfirmPassword: (value) => handleChange({ target: { name: 'confirmPassword', value } }),
    setAvatar: (file) => handleChange({ target: { name: 'avatar', type: 'file', files: [file] } }),
    setBanner: (file) => handleChange({ target: { name: 'banner', type: 'file', files: [file] } }),
    successMessage,
    errorMessage,
    handleChange,
    handleSubmit,
  };
};

export default useRegister;


