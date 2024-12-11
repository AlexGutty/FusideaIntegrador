import { useState, useEffect } from 'react';
import useAuthState from '../../hooks/useAuthState';

const useTradeRequests = () => {
  const [tradeRequests, setTradeRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuthState();

  useEffect(() => {
    const fetchTradeRequests = async () => {
      try {
        const response = await fetch(`http://localhost:3000/trades?memberTwo_id=${user.id_user}&status=PENDING`);
        if (!response.ok) {
          throw new Error('Failed to fetch trade requests');
        }
        const data = await response.json();
        setTradeRequests(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (user) {
      fetchTradeRequests();
    }
  }, [user]);

  const respondToTradeRequest = async (tradeId, accept) => {
    try {
      const response = await fetch(`http://localhost:3000/trades/${tradeId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: accept ? 'ACCEPTED' : 'FINISHED',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to respond to trade request');
      }

      setTradeRequests(prevRequests => prevRequests.filter(request => request.id_trade !== tradeId));
    } catch (err) {
      setError(err.message);
    }
  };

  return { tradeRequests, loading, error, respondToTradeRequest };
};

export default useTradeRequests;

