const mongoose = require('mongoose');

const SpecialtySchema = new mongoose.Schema({
  name: String,
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  status: Boolean
});

module.exports = mongoose.model('Specialty', SpecialtySchema);
