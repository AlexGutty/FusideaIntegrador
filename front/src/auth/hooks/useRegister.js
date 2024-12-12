import { useState, useEffect } from 'react';

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
  const [specialities, setSpecialities] = useState([]);
  const [roles, setRoles] = useState([]);

  // Cargar especialidades y roles al montar el hook
  useEffect(() => {
    const fetchSpecialitiesAndRoles = async () => {
      try {
        const [specialitiesRes, rolesRes] = await Promise.all([
          fetch('http://localhost:3000/api/specialties'),
          fetch('http://localhost:3000/api/roles'),
        ]);

        if (!specialitiesRes.ok || !rolesRes.ok) {
          throw new Error('Error al cargar especialidades o roles');
        }

        const [specialitiesData, rolesData] = await Promise.all([
          specialitiesRes.json(),
          rolesRes.json(),
        ]);

        setSpecialities(specialitiesData);
        setRoles(rolesData);
      } catch (error) {
        console.error('Error al cargar especialidades y roles:', error);
        setErrorMessage('No se pudieron cargar las especialidades y roles.');
      }
    };

    fetchSpecialitiesAndRoles();
  }, []);

  // Función de validación de formulario
  const validateForm = () => {
    const { id_speciality, id_role, name, last_name, email, gender, phoneNumber, password, confirmPassword } = formData;

    if (!id_speciality || !id_role || !name || !last_name || !email || !gender || !phoneNumber || !password || !confirmPassword) {
      setErrorMessage('Por favor, complete todos los campos.');
      return false;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden.');
      return false;
    }

    return true;
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async () => {
    if (!validateForm()) return; // Validación antes de enviar

    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al registrar los datos.');
      }

      const data = await response.json();
      setSuccessMessage('Registro exitoso.');
      setFormData({
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
      }); // Limpiar el formulario

    } catch (error) {
      setErrorMessage('Hubo un error al registrar los datos.');
      console.error('Error:', error);
    }
  };

  // Función para manejar los cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    successMessage,
    errorMessage,
    specialities,
    roles,
  };
};

export default useRegister;
