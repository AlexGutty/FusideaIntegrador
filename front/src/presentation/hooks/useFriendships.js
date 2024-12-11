import { useState, useEffect } from 'react';

/**
 * Hook personalizado `useFriendships`.
 * Este hook maneja las relaciones de amistad del usuario, incluyendo la obtención de amigos, solicitudes pendientes,
 * el envío de nuevas solicitudes de amistad y la actualización de su estado.
 * 
 * @param {string} currentUserId - El ID del usuario actual para el que se gestionan las amistades.
 * 
 * @returns {Object} - Un objeto con los siguientes valores y funciones:
 *   @returns {Array} friends - Lista de amigos del usuario actual.
 *   @returns {Array} pendingRequests - Lista de solicitudes de amistad pendientes del usuario actual.
 *   @returns {boolean} loading - Estado de carga mientras se obtienen los datos de amistad.
 *   @returns {string|null} error - Mensaje de error si ocurrió algún problema al realizar las peticiones.
 *   @returns {Function} sendFriendRequest - Función para enviar una solicitud de amistad a otro usuario.
 *   @returns {Function} updateFriendshipStatus - Función para actualizar el estado de una solicitud de amistad.
 */

const useFriendships = (currentUserId) => {
  const [friends, setFriends] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFriendships();
  }, [currentUserId]);

  const fetchFriendships = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/friendships/${currentUserId}`);
      if (!response.ok) throw new Error('Failed to fetch friendships');
      const data = await response.json();
      setFriends(data.friends);
      setPendingRequests(data.pendingRequests);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const sendFriendRequest = async (userId) => {
    try {
      const response = await fetch('/api/friendships', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id_1: currentUserId, user_id_2: userId }),
      });
      if (!response.ok) throw new Error('Failed to send friend request');
      fetchFriendships();
    } catch (error) {
      setError(error.message);
    }
  };

  const updateFriendshipStatus = async (friendshipId, status) => {
    try {
      const response = await fetch(`/api/friendships/${friendshipId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      if (!response.ok) throw new Error('Failed to update friendship status');
      fetchFriendships();
    } catch (error) {
      setError(error.message);
    }
  };

  return {
    friends,
    pendingRequests,
    loading,
    error,
    sendFriendRequest,
    updateFriendshipStatus,
  };
};

export default useFriendships;

