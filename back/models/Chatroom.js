const mongoose = require('mongoose');

const ChatRoomSchema = new mongoose.Schema({
  userOne: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  userTwo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  id_trade: { type: mongoose.Schema.Types.ObjectId, ref: 'Trade', required: true },
}, { timestamps: true });

module.exports = mongoose.models.ChatRoom || mongoose.model('ChatRoom', ChatRoomSchema);
