// src/auth/components/RegisterForm.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Importa los estilos de react-phone-input-2

const RegisterForm = () => {
  const { register, error, loading } = useAuth();
  const navigate = useNavigate();

  const [localError, setLocalError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [phone, setPhone] = useState(''); // Estado para el número de teléfono

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, last_name, email, password, confirmPassword, gender, avatar, banner } = e.target.elements;

    // Validar que las contraseñas coincidan
    if (password.value !== confirmPassword.value) {
      setLocalError('Las contraseñas no coinciden');
      return;
    }

    // Validar que el número de teléfono no esté vacío
    if (!phone) {
      setLocalError('El número de teléfono es requerido');
      return;
    }

    try {
      setLocalError('');
      await register({
        name: name.value,
        last_name: last_name.value,
        email: email.value,
        password: password.value,
        gender: gender.value,
        phoneNumber: phone, // Enviar el número completo con prefijo
        avatar: avatar.files[0],
        banner: banner.files[0],
      });

      // Redirigir al login después del registro exitoso
      navigate('/login');
    } catch (err) {
      console.error('Error al registrar:', err);
      // El error ya está manejado en AuthContext
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Regístrate
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Nombre */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              Nombre
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Ingresa tu nombre"
              />
            </div>
          </div>

          {/* Apellido */}
          <div>
            <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">
              Apellido
            </label>
            <div className="mt-2">
              <input
                id="last_name"
                name="last_name"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Ingresa tu apellido"
              />
            </div>
          </div>

          {/* Correo Electrónico */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Correo electrónico
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="correo@ejemplo.com"
              />
            </div>
          </div>

          {/* Contraseña */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Contraseña
            </label>
            <div className="mt-2 relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'} // Cambio dinámico del tipo de input
                required
                className="block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Ingresa tu contraseña"
              />
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash className="h-5 w-5 text-gray-500" /> : <FaEye className="h-5 w-5 text-gray-500" />}
              </span>
            </div>
          </div>

          {/* Confirmar Contraseña */}
          <div className="relative">
            <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
              Confirmar Contraseña
            </label>
            <div className="mt-2 relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'} // Cambio dinámico del tipo de input
                required
                className="block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Repite tu contraseña"
              />
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash className="h-5 w-5 text-gray-500" /> : <FaEye className="h-5 w-5 text-gray-500" />}
              </span>
            </div>
          </div>

          {/* Género */}
          <div>
            <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
              Género
            </label>
            <div className="mt-2">
              <select
                id="gender"
                name="gender"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Seleccionar...</option>
                <option value="MASCULINO">Masculino</option>
                <option value="FEMENINO">Femenino</option>
                <option value="OTRO">Otro</option>
              </select>
            </div>
          </div>

          {/* Teléfono con react-phone-input-2 */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">
              Teléfono
            </label>
            <div className="mt-2">
              <PhoneInput
                country={'pe'} // País por defecto (Perú), puedes cambiarlo según tus necesidades
                value={phone}
                onChange={(phone) => {
                  setPhone(phone);
                  console.log('Teléfono actualizado:', phone); // Para depuración
                }}
                inputStyle={{
                  width: '100%',
                  height: '2.5rem',
                  paddingLeft: '3.5rem',
                  borderRadius: '0.375rem',
                  border: '1px solid #d1d5db',
                  boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)',
                  fontSize: '0.875rem',
                  lineHeight: '1.25rem',
                }}
                buttonStyle={{
                  borderTopLeftRadius: '0.375rem',
                  borderBottomLeftRadius: '0.375rem',
                }}
                dropdownStyle={{
                  borderRadius: '0.375rem',
                  border: '1px solid #d1d5db',
                }}
                placeholder="Ingresa tu número de teléfono"
              />
            </div>
          </div>

          {/* Avatar (Imagen) */}
          <div>
            <label htmlFor="avatar" className="block text-sm font-medium leading-6 text-gray-900">
              Avatar (Imagen)
            </label>
            <div className="mt-2">
              <input
                id="avatar"
                name="avatar"
                type="file"
                accept="image/*"
                className="block w-full text-sm text-gray-900 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-indigo-600 file:text-white hover:file:bg-indigo-500"
              />
            </div>
          </div>

          {/* Banner (Imagen) */}
          <div>
            <label htmlFor="banner" className="block text-sm font-medium leading-6 text-gray-900">
              Banner (Imagen)
            </label>
            <div className="mt-2">
              <input
                id="banner"
                name="banner"
                type="file"
                accept="image/*"
                className="block w-full text-sm text-gray-900 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-indigo-600 file:text-white hover:file:bg-indigo-500"
              />
            </div>
          </div>

          {/* Botón de Registro */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ${
                loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-500'
              } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            >
              {loading ? 'Cargando...' : 'Registrarse'}
            </button>
          </div>
        </form>

        {/* Mensajes de Error */}
        {localError && <p className="mt-2 text-center text-sm text-red-500">{localError}</p>}
        {error && (
          <p className="mt-2 text-center text-sm text-red-500">
            {typeof error === 'string' ? error : 'Error al registrarse'}
          </p>
        )}

        {/* Enlace a la Página de Login */}
        <p className="mt-10 text-center text-sm text-gray-500">
          ¿Ya tienes cuenta?{' '}
          <Link
            to="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
