const Specialty = require('../models/Specialty');
const Category = require('../models/Category');

// Obtener todas las specialties
const getAllSpecialties = async (req, res) => {
  try {
    const specialties = await Specialty.findAll({
      include: {
        model: Category,
        as: 'category', // Nombre del alias que definimos en la relación
      },
    });
    res.status(200).json(specialties);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener las especialidades' });
  }
};

// Obtener una specialty por ID
const getSpecialtyById = async (req, res) => {
  const { id_speciality } = req.params;
  try {
    const specialty = await Specialty.findOne({
      where: { id_speciality },
      include: {
        model: Category,
        as: 'category',
      },
    });
    if (!specialty) {
      return res.status(404).json({ message: 'Especialidad no encontrada' });
    }
    res.status(200).json(specialty);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener la especialidad' });
  }
};

// Crear una nueva specialty
const createSpecialty = async (req, res) => {
  const { name, category_id } = req.body;
  try {
    const newSpecialty = await Specialty.create({
      name,
      category_id,
    });
    res.status(201).json(newSpecialty);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al crear la especialidad' });
  }
};

// Actualizar una specialty
const updateSpecialty = async (req, res) => {
  const { id_speciality } = req.params;
  const { name, category_id, status } = req.body;
  try {
    const specialty = await Specialty.findByPk(id_speciality);
    if (!specialty) {
      return res.status(404).json({ message: 'Especialidad no encontrada' });
    }
    specialty.name = name || specialty.name;
    specialty.category_id = category_id || specialty.category_id;
    specialty.status = status || specialty.status;

    await specialty.save();
    res.status(200).json(specialty);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al actualizar la especialidad' });
  }
};

// Eliminar una specialty
const deleteSpecialty = async (req, res) => {
  const { id_speciality } = req.params;
  try {
    const specialty = await Specialty.findByPk(id_speciality);
    if (!specialty) {
      return res.status(404).json({ message: 'Especialidad no encontrada' });
    }
    await specialty.destroy();
    res.status(200).json({ message: 'Especialidad eliminada' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al eliminar la especialidad' });
  }
};

module.exports = {
  getAllSpecialties,
  getSpecialtyById,
  createSpecialty,
  updateSpecialty,
  deleteSpecialty,
};
