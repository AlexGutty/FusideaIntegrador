import React from 'react';
import { motion } from 'framer-motion';

const TradeCard = ({ trade, onClick, onAccept, onReject }) => {
  const isRequest = trade.status === 'PENDING' && trade.memberTwo_id === trade.currentUserId;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-xl font-semibold mb-2">Trade #{trade.id_trade}</h3>
      <p className="text-gray-600 mb-2">Status: {trade.status}</p>
      <p className="text-gray-600 mb-2">Duration: {trade.duration} minutes</p>
      <p className="text-gray-600 mb-4">Expires: {new Date(trade.expiresAt).toLocaleString()}</p>
      
      {isRequest && (
        <div className="flex justify-between mt-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={(e) => {
              e.stopPropagation();
              onAccept();
            }}
          >
            Accept
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={(e) => {
              e.stopPropagation();
              onReject();
            }}
          >
            Reject
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default TradeCard;




