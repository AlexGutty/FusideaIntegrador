import React from 'react';
import { UserIcon } from '@heroicons/react/24/solid';

/**
 * Componente UserList.
 * Este componente muestra una lista de otros usuarios y permite enviar solicitudes de amistad a cada uno.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {Array} props.users - Lista de usuarios con sus detalles (id, name, etc.).
 * @param {Function} props.onSendRequest - Función que se ejecuta cuando se hace clic en el botón para enviar una solicitud de amistad a un usuario.
 * @returns {JSX.Element} - Una lista de usuarios con un botón para enviar solicitudes de amistad.
 */

const UserList = ({ users, onSendRequest }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">Other Users</h3>
      <ul className="space-y-2">
        {users.map(user => (
          <li key={user.id} className="flex items-center justify-between bg-white p-3 rounded-lg shadow">
            <span>{user.name}</span>
            <button
              onClick={() => onSendRequest(user.id)}
              className="text-blue
-600 hover:text-blue-800"
            >
              <UserIcon className="h-5 w-5" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

