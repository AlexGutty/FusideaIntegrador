import { useState, useEffect } from 'react';

const useChat = (chatRoomId) => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    if (chatRoomId) {
      fetchMessages(chatRoomId);
    }
    fetchChatRooms();
  }, [chatRoomId]);

  const fetchMessages = async (roomId) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/messages/${roomId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }
      const data = await response.json();
      setMessages(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchChatRooms = async () => {
    try {
      const response = await fetch('/api/chatrooms');
      if (!response.ok) {
        throw new Error('Failed to fetch chat rooms');
      }
      const data = await response.json();
      setChatRooms(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const sendMessage = async (message) => {
    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, chatRoomId }),
      });
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      const newMessage = await response.json();
      setMessages([...messages, newMessage]);
    } catch (err) {
      setError(err.message);
    }
  };

  return { messages, sendMessage, isLoading, error, chatRooms };
};

export default useChat;





