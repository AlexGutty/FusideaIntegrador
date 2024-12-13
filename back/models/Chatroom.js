const mongoose = require('mongoose');

const ChatRoomSchema = new mongoose.Schema({
  userOne: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  userTwo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  id_trade: { type: mongoose.Schema.Types.ObjectId, ref: 'Trade' }
});

module.exports = mongoose.model('ChatRoom', ChatRoomSchema);
