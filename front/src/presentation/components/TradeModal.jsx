import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TradeModal = ({ isOpen, onClose, trade }) => {
  if (!trade) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="bg-white rounded-lg p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">Trade Details</h2>
            <p><strong>Trade ID:</strong> {trade.id_trade}</p>
            <p><strong>Status:</strong> {trade.status}</p>
            <p><strong>Duration:</strong> {trade.duration} minutes</p>
            <p><strong>Expires At:</strong> {new Date(trade.expiresAt).toLocaleString()}</p>
            <p><strong>Member One ID:</strong> {trade.memberOne_id}</p>
            <p><strong>Member One Specialty:</strong> {trade.memberOne_specialty}</p>
            <p><strong>Member One Has Rated:</strong> {trade.memberOne_hasRated ? 'Yes' : 'No'}</p>
            <p><strong>Member Two ID:</strong> {trade.memberTwo_id}</p>
            <p><strong>Member Two Specialty:</strong> {trade.memberTwo_specialty}</p>
            <p><strong>Member Two Has Rated:</strong> {trade.memberTwo_hasRated ? 'Yes' : 'No'}</p>
            <p><strong>Chat Room ID:</strong> {trade.chatRoomId}</p>
            <button
              className="mt-6 bg-[#4c9141] text-white px-4 py-2 rounded hover:bg-[#3a6f32]"
              onClick={onClose}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TradeModal;


