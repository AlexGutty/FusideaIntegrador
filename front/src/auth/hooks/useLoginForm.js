// hooks/useLoginForm.js
import { useState } from 'react';

const useLoginForm = () => {
  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Manejar el cambio en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Aquí iría la lógica para la llamada al backend
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Login exitoso');
        // Aquí podrías redirigir al usuario a la página principal o dashboard
      } else {
        alert(result.message || 'Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al conectar con el servidor');
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useLoginForm;
