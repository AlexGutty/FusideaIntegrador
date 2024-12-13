const mongoose = require('mongoose');

const CollaborativeProjectSchema = new mongoose.Schema({
  id_user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  project_name: String,
  description: String,
  github_link: String,
  contribution_role: String,
  started_at: Date,
  completed_at: Date
});

module.exports = mongoose.model('CollaborativeProject', CollaborativeProjectSchema);
