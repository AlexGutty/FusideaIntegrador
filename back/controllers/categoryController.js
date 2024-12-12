const Category = require('../models/Category');

// Obtener todas las categorías
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener las categorías' });
  }
};

// Obtener una categoría por ID
const getCategoryById = async (req, res) => {
  const { id_category } = req.params;
  try {
    const category = await Category.findOne({
      where: { id_category },
    });
    if (!category) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }
    res.status(200).json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener la categoría' });
  }
};

// Crear una nueva categoría
const createCategory = async (req, res) => {
  const { name, status } = req.body;
  try {
    const newCategory = await Category.create({
      name,
      status,
    });
    res.status(201).json(newCategory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al crear la categoría' });
  }
};

// Actualizar una categoría
const updateCategory = async (req, res) => {
  const { id_category } = req.params;
  const { name, status } = req.body;
  try {
    const category = await Category.findByPk(id_category);
    if (!category) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }
    category.name = name || category.name;
    category.status = status || category.status;

    await category.save();
    res.status(200).json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al actualizar la categoría' });
  }
};

// Eliminar una categoría
const deleteCategory = async (req, res) => {
  const { id_category } = req.params;
  try {
    const category = await Category.findByPk(id_category);
    if (!category) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }
    await category.destroy();
    res.status(200).json({ message: 'Categoría eliminada' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al eliminar la categoría' });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
