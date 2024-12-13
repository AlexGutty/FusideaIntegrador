const User = require('../models/User');
const CollaborativeProject = require('../models/CollaborativeProject');

// Buscar usuarios, proyectos y grupos
exports.search = async (req, res) => {
  try {
    const { query } = req.body;
    const users = await User.find({ $text: { $search: query } });
    const projects = await CollaborativeProject.find({ $text: { $search: query } });
    res.status(200).json({ users, projects });
  } catch (error) {
    res.status(500).json({ error: 'Error en la búsqueda' });
  }
};
