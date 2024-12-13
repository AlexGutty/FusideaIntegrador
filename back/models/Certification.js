const mongoose = require('mongoose');

const CertificationSchema = new mongoose.Schema({
  id_user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  issuer: String,
  issuer_type: { type: String, enum: ['PERSONA', 'INSTITUCION'] },
  file_url: String,
  issued_at: Date
});

module.exports = mongoose.model('Certification', CertificationSchema);
