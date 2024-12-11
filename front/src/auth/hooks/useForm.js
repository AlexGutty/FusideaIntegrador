import { useState } from 'react';

/**
 * Hook personalizado `useForm`.
 * Proporciona un estado controlado para manejar formularios, incluyendo cambios en los campos de entrada
 * y validación básica del correo electrónico.
 *
 * @param {Object} initialState - El estado inicial del formulario, representado como un objeto clave-valor.
 * @returns {Object} - Contiene:
 *  - `formData` {Object}: Los datos actuales del formulario.
 *  - `setFormData` {Function}: Permite actualizar directamente el estado del formulario.
 *  - `emailError` {string}: Mensaje de error relacionado con el campo de correo electrónico.
 *  - `setEmailError` {Function}: Permite establecer manualmente el mensaje de error de correo electrónico.
 *  - `handleChange` {Function}: Manejador para actualizar el estado del formulario basado en los cambios de los campos.
 *  - `handleSubmit` {Function}: Manejador para controlar el envío del formulario.
 */

const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [emailError, setEmailError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return {
    formData,
    setFormData,
    emailError,
    setEmailError,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
