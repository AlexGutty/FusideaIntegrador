import { useState, useEffect } from 'react';

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

