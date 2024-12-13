const mongoose = require('mongoose');

const UserRatingSchema = new mongoose.Schema({
  id_user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  id_trade: { type: mongoose.Schema.Types.ObjectId, ref: 'Trade' },
  is_general: Boolean,
  comment: String,
  rating: Number
});

module.exports = mongoose.model('UserRating', UserRatingSchema);
