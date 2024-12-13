const User = require('../models/User');

// Obtener perfil
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('id_specialty id_role');
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener perfil' });
  }
};

// Editar perfil
exports.editProfile = async (req, res) => {
  try {
    const updates = req.body;
    const user = await User.findByIdAndUpdate(req.user.id, updates, { new: true });
    res.status(200).json({ message: 'Perfil actualizado', user });
  } catch (error) {
    res.status(500).json({ error: 'Error al editar perfil' });
  }
};
