import { motion } from 'framer-motion';
import { ClockIcon, UserIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

const TradeCard = ({ trade, onClick, onAccept, onReject }) => {
  const isRequest = trade.status === 'PENDING';

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#4c9141] mb-2">
          Trade with {trade.memberOne_id === 1 ? 'User ' + trade.memberTwo_id : 'User ' + trade.memberOne_id}
        </h3>
        <div className="flex items-center text-gray-600 mb-2">
          <ClockIcon className="h-5 w-5 mr-2" />
          <span>Duration: {trade.duration} days</span>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <UserIcon className="h-5 w-5 mr-2" />
          <span>Status: {trade.status}</span>
        </div>
        {isRequest && (
          <div className="flex justify-end space-x-2 mt-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAccept(trade.id_trade);
              }}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-200"
            >
              <CheckCircleIcon className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onReject(trade.id_trade);
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200"
            >
              <XCircleIcon className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TradeCard;



