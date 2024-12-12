const Role = require('../models/Role');

// Obtener todos los roles
const getAllRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.status(200).json(roles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener los roles' });
  }
};

// Obtener un rol por ID
const getRoleById = async (req, res) => {
  const { id_role } = req.params;
  try {
    const role = await Role.findOne({
      where: { id_role },
    });
    if (!role) {
      return res.status(404).json({ message: 'Rol no encontrado' });
    }
    res.status(200).json(role);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener el rol' });
  }
};

// Crear un nuevo rol
const createRole = async (req, res) => {
  const { name, description } = req.body;
  try {
    const newRole = await Role.create({
      name,
      description,
    });
    res.status(201).json(newRole);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al crear el rol' });
  }
};

// Actualizar un rol
const updateRole = async (req, res) => {
  const { id_role } = req.params;
  const { name, description } = req.body;
  try {
    const role = await Role.findByPk(id_role);
    if (!role) {
      return res.status(404).json({ message: 'Rol no encontrado' });
    }
    role.name = name || role.name;
    role.description = description || role.description;

    await role.save();
    res.status(200).json(role);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al actualizar el rol' });
  }
};

// Eliminar un rol
const deleteRole = async (req, res) => {
  const { id_role } = req.params;
  try {
    const role = await Role.findByPk(id_role);
    if (!role) {
      return res.status(404).json({ message: 'Rol no encontrado' });
    }
    await role.destroy();
    res.status(200).json({ message: 'Rol eliminado' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al eliminar el rol' });
  }
};

module.exports = {
  getAllRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
};
