import React, { useState, useRef, useEffect } from 'react';
import { ChatBubbleLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';
import useChat from '../hooks/useChat';

/**
 * Componente ChatBubble.
 * Este componente muestra una burbuja de chat flotante en la esquina inferior derecha de la página.
 * Al hacer clic en la burbuja, se abre un panel de chat donde los usuarios pueden seleccionar una sala
 * de chat y enviar mensajes. Los mensajes se muestran de forma dinámica, y el panel de chat se cierra
 * cuando el usuario hace clic en el ícono de cierre.
 * 
 * @returns {JSX.Element} - Una burbuja de chat interactiva que permite a los usuarios enviar y recibir mensajes.
 */

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [selectedChatRoom, setSelectedChatRoom] = useState(null);
  const messagesEndRef = useRef(null);

  const { messages, sendMessage, isLoading, error, chatRooms } = useChat(selectedChatRoom || 0);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() && selectedChatRoom) {
      sendMessage(inputMessage);
      setInputMessage('');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
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
          <div className="p-2">
            <select
              value={selectedChatRoom || ''}
              onChange={(e) => setSelectedChatRoom(Number(e.target.value))}
              className="w-full p-2 border rounded"
            >
              <option value="">Selecciona un Chat</option>
              {chatRooms?.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {isLoading ? (
              <p>Cargando mensajes...</p>
            ) : error ? (
              <p>Error al cargar mensajes</p>
            ) : (
              messages.map((msg) => (
                <div key={msg.id_messages} className="mb-2">
                  <strong>{msg.senderId === 1 ? 'Tú' : 'Otros'}:</strong> {msg.message}
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Escribe un mensaje..."
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </form>
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

