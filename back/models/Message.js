const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  receiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  message: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
  chatRoomId: { type: mongoose.Schema.Types.ObjectId, ref: 'ChatRoom' }
});

module.exports = mongoose.model('Message', MessageSchema);
