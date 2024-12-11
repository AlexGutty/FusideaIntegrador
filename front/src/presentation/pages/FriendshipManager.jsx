import React from 'react';
import useFriendships from '../hooks/useFriendships';
import useUsers from '../hooks/useUsers';
import FriendList from '../components/FriendList';
import PendingRequests from '../components/PendingRequests';
import UserList from '../components/UserList';

/**
 * Componente `FriendshipManager` que gestiona las relaciones de amistad de un usuario.
 * Muestra las siguientes secciones:
 * 1. Lista de amigos con opciones para bloquear.
 * 2. Lista de solicitudes pendientes con opciones para aceptar o rechazar.
 * 3. Lista de otros usuarios a los que el usuario actual puede enviar una solicitud de amistad.
 * 
 * @param {Object} props - Propiedades del componente.
 * @param {number} props.currentUserId - El ID del usuario actual para gestionar sus amistades.
 * 
 * @returns {JSX.Element} - El componente renderiza la gestión de amistades con listas de amigos, 
 *                          solicitudes pendientes y otros usuarios.
 */

const FriendshipManager = ({ currentUserId }) => {
  const {
    friends,
    pendingRequests,
    loading: friendshipsLoading,
    error: friendshipsError,
    sendFriendRequest,
    updateFriendshipStatus,
  } = useFriendships(currentUserId);

  const {
    users,
    loading: usersLoading,
    error: usersError,
  } = useUsers();

  if (friendshipsLoading || usersLoading) return <div>Loading...</div>;
  if (friendshipsError || usersError) return <div>Error: {friendshipsError || usersError}</div>;

  const otherUsers = users.filter(user => 
    user.id !== currentUserId && 
    !friends.some(friend => friend.id === user.id) &&
    !pendingRequests.some(request => request.id === user.id)
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Friendship Manager</h2>
      
      <FriendList 
        friends={friends} 
        onBlock={(friendshipId) => updateFriendshipStatus(friendshipId, 'blocked')} 
      />
      
      <PendingRequests 
        requests={pendingRequests} 
        onAccept={(friendshipId) => updateFriendshipStatus(friendshipId, 'accepted')}
        onReject={(friendshipId) => updateFriendshipStatus(friendshipId, 'blocked')}
      />
      
      <UserList 
        users={otherUsers} 
        onSendRequest={sendFriendRequest} 
      />
    </div>
  );
};

export default FriendshipManager;

