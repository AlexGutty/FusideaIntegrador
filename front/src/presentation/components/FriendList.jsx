import React from 'react';
import { NoSymbolIcon } from '@heroicons/react/24/solid';

const FriendList = ({ friends, onBlock }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-2">Tus amigos</h3>
      {friends.length > 0 ? (
        <ul className="space-y-2">
          {friends.map(friend => (
            <li key={friend.id} className="flex items-center justify-between bg-white p-3 rounded-lg shadow">
              <span>{friend.name}</span>
              <button
                onClick={() => onBlock(friend.friendshipId)}
                className="text-red-600 hover:text-red-800"
              >
                <NoSymbolIcon className="h-5 w-5" />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>You don't have any friends yet.</p>
      )}
    </div>
  );
};

export default FriendList;

