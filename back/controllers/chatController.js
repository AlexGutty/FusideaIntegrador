const Message = require('../models/Message');
const ChatRoom = require('../models/Chatroom');

// Enviar mensaje
exports.sendMessage = async (req, res) => {
  try {
    const message = await Message.create(req.body);
    res.status(201).json({ message });
  } catch (error) {
    res.status(500).json({ error: 'Error al enviar mensaje' });
  }
};

// Obtener mensajes
exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find({ chatRoomId: req.params.chatRoomId });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener mensajes' });
  }
};
