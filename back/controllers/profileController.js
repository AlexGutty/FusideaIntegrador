const User = require('../models/User');
const path = require('path');
const fs = require('fs');

// Actualizar perfil de usuario
exports.updateProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const { name, last_name, email, gender, phoneNumber, aboutme } = req.body;

    const updatedUser = await User.findByIdAndUpdate(userId, {
      name,
      last_name,
      email,
      gender,
      phoneNumber,
      aboutme
    }, { new: true });

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al actualizar el perfil');
  }
};

// Actualizar avatar
exports.updateAvatar = async (req, res) => {
  try {
    const { userId } = req.params;
    const avatar = req.file; // Usamos 'req.file' ya que estamos usando multer para subir archivos

    if (!avatar) {
      return res.status(400).send('No se subió ningún archivo');
    }

    const updatedUser = await User.findByIdAndUpdate(userId, {
      avatar: avatar.path // Guardamos la ruta del archivo en la base de datos
    }, { new: true });

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al actualizar el avatar');
  }
};

// Actualizar banner
exports.updateBanner = async (req, res) => {
  try {
    const { userId } = req.params;
    const banner = req.file; // Usamos 'req.file' para obtener el archivo de banner

    if (!banner) {
      return res.status(400).send('No se subió ningún archivo');
    }

    const updatedUser = await User.findByIdAndUpdate(userId, {
      banner: banner.path // Guardamos la ruta del archivo en la base de datos
    }, { new: true });

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al actualizar el banner');
  }
};
