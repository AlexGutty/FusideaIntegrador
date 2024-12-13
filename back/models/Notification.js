const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  id_user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  message: String,
  type: { type: String, enum: ['contact_request', 'rating_received', 'project_invitation', 'message_received'] },
  createdAt: { type: Date, default: Date.now },
  is_read: Boolean
});

module.exports = mongoose.model('Notification', NotificationSchema);
