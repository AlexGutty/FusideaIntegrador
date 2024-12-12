const { DataTypes } = require('sequelize');
const db = require('../utils/db');
const Category = require('./Category'); // Relación con Category

const Specialty = db.define('Specialty', {
  id_speciality: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Category,
      key: 'id_category',
    },
  },
  status: {
    type: DataTypes.TINYINT,
    defaultValue: 1,
    allowNull: true,
  },
}, {
  tableName: 'specialties',
  timestamps: false, // Si no usas createdAt/updatedAt en la tabla
});

// Configuración de relación
Specialty.belongsTo(Category, {
  foreignKey: 'category_id',
  as: 'category',
});

module.exports = Specialty;
