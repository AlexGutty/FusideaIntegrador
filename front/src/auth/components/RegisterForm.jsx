import React from 'react';
import { useNavigate } from 'react-router-dom';
import useRegister from '../hooks/useRegister';

/**
 * Componente RegisterForm.
 * Renderiza un formulario de registro que permite a los usuarios ingresar sus datos personales,
 * seleccionar una especialidad y un rol, proporcionar una descripción personal, y subir un avatar 
 * y un banner. Incluye manejo de validación, mensajes de error y confirmación.
 *
 * @component
 * @returns {JSX.Element} Formulario de registro de usuario.
 */

const RegisterForm = () => {
  const { register, error, isLoading } = useRegister();
  const navigate = useNavigate(); // Inicializamos useNavigate para la redirección

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, last_name, email, password, confirmPassword, gender, phoneNumber, avatar, banner } = e.target.elements;

    // Verifica que las contraseñas coincidan
    if (password.value !== confirmPassword.value) {
      alert('Las contraseñas no coinciden');
      return;
    }

    register({
      name: name.value,
      last_name: last_name.value,
      email: email.value,
      password: password.value,
      gender: gender.value,
      phoneNumber: phoneNumber.value,
      avatar: avatar.files[0],  // Aquí se toma el archivo seleccionado
      banner: banner.files[0],  // Aquí se toma el archivo seleccionado
    })
      .then(() => {
        // Si el registro es exitoso, redirigimos al login
        navigate('/login');
      })
      .catch((err) => {
        // Maneja cualquier error aquí
        console.error("Error al registrar:", err);
      });
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
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nombre
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="last_name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Apellido
            </label>
            <div className="mt-2">
              <input
                id="last_name"
                name="last_name"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Correo electrónico
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Contraseña
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Confirmar Contraseña
            </label>
            <div className="mt-2">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Género
            </label>
            <div className="mt-2">
              <select
                id="gender"
                name="gender"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Seleccionar...</option>
                <option value="MASCULINO">Masculino</option>
                <option value="FEMENINO">Femenino</option>
                <option value="OTRO">Otro</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Teléfono
            </label>
            <div className="mt-2">
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="avatar"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
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

          <div>
            <label
              htmlFor="banner"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
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

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ${isLoading ? 'bg-gray-500' : 'bg-indigo-600 hover:bg-indigo-500'} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            >
              {isLoading ? 'Cargando...' : 'Registrarse'}
            </button>
          </div>
        </form>

        {error && <p className="mt-2 text-center text-sm text-red-500">{error}</p>}

        <p className="mt-10 text-center text-sm text-gray-500">
          ¿Ya tienes cuenta?{' '}
          <a
            href="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
