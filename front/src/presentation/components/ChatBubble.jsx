import { useState } from 'react';
import { ChatBubbleLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col">
          <div className="bg-blue-600 p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="text-white font-semibold">Chat</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {/* Chat messages will go here */}
          </div>
          <div className="p-4 border-t">
            <input
              type="text"
              placeholder="Escribe un mensaje..."
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 p-3 rounded-full text-white shadow-lg hover:bg-blue-700 transition-colors"
        >
          <ChatBubbleLeftIcon className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default ChatBubble;