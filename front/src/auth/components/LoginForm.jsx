// src/auth/components/LoginForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate
import useAuth from '../../hooks/useAuth'; // Asegúrate de que la ruta sea correcta

const LoginForm = () => {
  const { login, error, loading } = useAuth(); // Usamos el hook actualizado
  const navigate = useNavigate(); // Inicializamos useNavigate para redirigir al usuario
  const [localError, setLocalError] = useState(''); // Para manejar errores locales

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (!email || !password) {
      setLocalError('Por favor, llena todos los campos.');
      return;
    }

    try {
      setLocalError('');
      console.log('Datos enviados:', { email, password }); // Verifica los datos antes de enviarlos
      await login({ email, password });

      // Si el login es exitoso, redirigimos al usuario a /home
      navigate('/home');
    } catch (err) {
      console.error('Error al iniciar sesión:', err);
      // Puedes manejar errores adicionales aquí si es necesario
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-16 w-auto rounded"
          src="/imgs/logo2.jpg"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          ¡Ingresa a tu cuenta!
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
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
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Contraseña
              </label>
              <div className="text-sm">
                <a
                  href="/recuperar"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>
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
            <button
              type="submit"
              disabled={loading}
              className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ${
                loading
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-500'
              } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            >
              {loading ? 'Cargando...' : 'Iniciar sesión'}
            </button>
          </div>
        </form>

        {localError && (
          <p className="mt-2 text-center text-sm text-red-500">{localError}</p>
        )}
        {error && (
          <p className="mt-2 text-center text-sm text-red-500">{error}</p>
        )}

        <p className="mt-10 text-center text-sm text-gray-500">
          ¿No eres miembro?{' '}
          <a
            href="/register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Crea tu cuenta gratis
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
