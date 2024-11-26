import React from 'react';
import { UserIcon } from '@heroicons/react/24/solid';

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

