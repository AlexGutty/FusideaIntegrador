const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id_specialty: { type: mongoose.Schema.Types.ObjectId, ref: 'Specialty' },
  id_role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' },
  name: String,
  last_name: String,
  email: String,
  gender: { type: String, enum: ['MASCULINO', 'FEMENINO', 'OTRO'] },
  phoneNumber: String,
  aboutme: String,
  email_verified: Boolean,
  average_rating: { type: mongoose.Types.Decimal128 },
  password: String,
  avatar: String,
  banner: String,
  token_password: String,
  password_token: String,
  token_verification: String
});

module.exports = mongoose.model('User', UserSchema);
