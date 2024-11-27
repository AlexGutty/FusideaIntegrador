import React from 'react';
import { UserPlusIcon, UserMinusIcon } from '@heroicons/react/24/solid';

const PendingRequests = ({ requests, onAccept, onReject }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-2">Solicitudes Pendientes</h3>
      {requests.length > 0 ? (
        <ul className="space-y-2">
          {requests.map(request => (
            <li key={request.id} className="flex items-center justify-between bg-white p-3 rounded-lg shadow">
              <span>{request.name}</span>
              <div>
                <button
                  onClick={() => onAccept(request.friendshipId)}
                  className="text-green-600 hover:text-green-800 mr-2"
                >
                  <UserPlusIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={() => onReject(request.friendshipId)}
                  className="text-red-600 hover:text-red-800"
                >
                  <UserMinusIcon className="h-5 w-5" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay solicitudes de amistad Pendientes.</p>
      )}
    </div>
  );
};

export default PendingRequests;



