import { useState, useEffect } from 'react';

const useTradeRequests = () => {
  const [tradeRequests, setTradeRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTradeRequests();
  }, []);

  const fetchTradeRequests = async () => {
    try {
      setLoading(true);
      // Replace this with your actual API call
      const response = await fetch('/api/trade-requests');
      if (!response.ok) {
        throw new Error('Failed to fetch trade requests');
      }
      const data = await response.json();
      setTradeRequests(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const respondToTradeRequest = async (requestId, accept) => {
    try {
      // Replace this with your actual API call
      const response = await fetch(`/api/trade-requests/${requestId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: accept ? 'ACCEPTED' : 'REJECTED' }),
      });
      if (!response.ok) {
        throw new Error('Failed to respond to trade request');
      }
      // Refresh trade requests after responding
      await fetchTradeRequests();
    } catch (err) {
      setError(err.message);
    }
  };

  return { tradeRequests, loading, error, respondToTradeRequest };
};

export default useTradeRequests;

