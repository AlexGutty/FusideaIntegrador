import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useTrades from '../hooks/useTrades';
import useTradeRequests from '../hooks/useTradeRequests';
import TradeCard from '../components/TradeCard';
import TradeModal from '../components/TradeModal';
import useAuthState from '../../hooks/useAuthState';

const MyTrades = () => {
  const { trades, loading: tradesLoading, error: tradesError } = useTrades();
  const { tradeRequests, loading: requestsLoading, error: requestsError, respondToTradeRequest } = useTradeRequests();
  const [selectedTrade, setSelectedTrade] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuthState();

  const handleTradeClick = (trade) => {
    setSelectedTrade(trade);
    setIsModalOpen(true);
  };

  const handleAcceptRequest = (requestId) => {
    respondToTradeRequest(requestId, true);
  };

  const handleRejectRequest = (requestId) => {
    respondToTradeRequest(requestId, false);
  };

  if (tradesLoading || requestsLoading) return <div>Loading...</div>;
  if (tradesError || requestsError) return <div>Error: {tradesError || requestsError}</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-[#4c9141] mb-8 text-center">My Trades</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#4c9141] mb-4">Active Trades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trades.filter(trade => trade.status !== 'PENDING').map(trade => (
            <TradeCard
              key={trade.id_trade}
              trade={{...trade, currentUserId: user.id_user}}
              onClick={() => handleTradeClick(trade)}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-[#4c9141] mb-4">Trade Requests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tradeRequests.map(request => (
            <TradeCard
              key={request.id_trade}
              trade={{...request, currentUserId: user.id_user}}
              onClick={() => handleTradeClick(request)}
              onAccept={() => handleAcceptRequest(request.id_trade)}
              onReject={() => handleRejectRequest(request.id_trade)}
            />
          ))}
        </div>
      </section>

      <TradeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        trade={selectedTrade}
      />
    </motion.div>
  );
};

export default MyTrades;




