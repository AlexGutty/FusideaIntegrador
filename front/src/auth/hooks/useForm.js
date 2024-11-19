import { useState } from 'react';

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
