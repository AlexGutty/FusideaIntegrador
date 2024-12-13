const CollaborativeProject = require('../models/CollaborativeProject');

// Crear proyecto
exports.createProject = async (req, res) => {
  try {
    const project = await CollaborativeProject.create({ ...req.body, id_user: req.user.id });
    res.status(201).json({ message: 'Proyecto creado', project });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear proyecto' });
  }
};

// Obtener proyectos del usuario
exports.getProjects = async (req, res) => {
  try {
    const projects = await CollaborativeProject.find({ id_user: req.user.id });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener proyectos' });
  }
};
