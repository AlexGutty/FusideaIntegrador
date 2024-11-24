import { useState, useEffect, useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import chatService from '../services/chatService';

const useChat = (chatRoomId) => {
  const [messages, setMessages] = useState([]);
  const queryClient = useQueryClient();

  const { data: chatRooms } = useQuery('chatRooms', chatService.getChatRooms);

  const { data: fetchedMessages, isLoading, error } = useQuery(
    ['messages', chatRoomId],
    () => chatService.getMessages(chatRoomId),
    {
      enabled: !!chatRoomId,
    }
  );

  useEffect(() => {
    if (fetchedMessages) {
      setMessages(fetchedMessages);
    }
  }, [fetchedMessages]);

  const sendMessageMutation = useMutation(chatService.sendMessage, {
    onSuccess: (newMessage) => {
      queryClient.invalidateQueries(['messages', chatRoomId]);
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    },
  });

  const sendMessage = useCallback(
    (content) => {
      if (chatRoomId) {
        sendMessageMutation.mutate({
          senderId: 1, // Usamos un ID fijo para el remitente
          receivedId: 0,
          message: content,
          chatRoomId,
        });
      }
    },
    [chatRoomId, sendMessageMutation]
  );

  return {
    messages,
    sendMessage,
    isLoading,
    error,
    chatRooms,
  };
};

export default useChat;






