import { useState, useEffect } from 'react';
import useAuthState from '../../hooks/useAuthState';

const useTrades = () => {
  const [trades, setTrades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuthState();

  useEffect(() => {
    const fetchTrades = async () => {
      try {
        const response = await fetch(`http://localhost:3000/trades?memberOne_id=${user.id_user}&memberTwo_id=${user.id_user}`);
        if (!response.ok) {
          throw new Error('Failed to fetch trades');
        }
        const data = await response.json();
        setTrades(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (user) {
      fetchTrades();
    }
  }, [user]);

  return { trades, loading, error };
};

export default useTrades;


