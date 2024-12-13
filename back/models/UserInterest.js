const mongoose = require('mongoose');

const UserInterestSchema = new mongoose.Schema({
  id_user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  id_category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  status: Boolean
});

module.exports = mongoose.model('UserInterest', UserInterestSchema);
