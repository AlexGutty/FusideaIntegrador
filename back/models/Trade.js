const mongoose = require('mongoose');

const TradeSchema = new mongoose.Schema({
  memberOne_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  memberOne_specialty: { type: mongoose.Schema.Types.ObjectId, ref: 'Specialty' },
  memberOne_hasRated: Boolean,
  memberTwo_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  memberTwo_specialty: { type: mongoose.Schema.Types.ObjectId, ref: 'Specialty' },
  memberTwo_hasRated: Boolean,
  duration: Number,
  expiresAt: Date,
  status: { type: String, enum: ['ACCEPTED', 'PENDING', 'FINISHED'] },
  chatRoomId: { type: mongoose.Schema.Types.ObjectId, ref: 'ChatRoom' }
});

module.exports = mongoose.model('Trade', TradeSchema);
