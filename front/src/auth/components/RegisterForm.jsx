import React from "react";
import useRegister from "../hooks/useRegister"; // Asegúrate de que la ruta sea la correcta

const RegisterForm = () => {
  const {
    formData,
    specialities,
    roles,
    successMessage,
    errorMessage,
    handleChange,
    handleSubmit,
  } = useRegister();

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Registro de Usuario</h2>

      {successMessage && (
        <div className="bg-green-500 text-white p-3 rounded-md mb-4">{successMessage}</div>
      )}
      {errorMessage && (
        <div className="bg-red-500 text-white p-3 rounded-md mb-4">{errorMessage}</div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Nombre */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Apellido */}
        <div className="mb-4">
          <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Apellido:</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Correo electrónico */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Género */}
        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Género:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Selecciona el género</option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
            <option value="other">Otro</option>
          </select>
        </div>

        {/* Especialidad */}
        <div className="mb-4">
          <label htmlFor="id_speciality" className="block text-sm font-medium text-gray-700">Especialidad:</label>
          <select
            id="id_speciality"
            name="id_speciality"
            value={formData.id_speciality}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Selecciona una especialidad</option>
            {specialities.map((speciality) => (
              <option key={speciality.id || speciality.name} value={speciality.id}>
                {speciality.name}
              </option>
            ))}
          </select>
        </div>

        {/* Rol */}
        <div className="mb-4">
          <label htmlFor="id_role" className="block text-sm font-medium text-gray-700">Rol:</label>
          <select
            id="id_role"
            name="id_role"
            value={formData.id_role}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Selecciona un rol</option>
            {roles.map((role) => (
              <option key={role.id || role.name} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>

        {/* Contraseña */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Confirmar Contraseña */}
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirmar Contraseña:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Botón de Enviar */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
