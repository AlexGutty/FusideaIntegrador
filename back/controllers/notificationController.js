const Notification = require('../models/Notification');

// Obtener notificaciones
exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ id_user: req.user.id });
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener notificaciones' });
  }
};
