const { DataTypes } = require('sequelize');
const db = require('../utils/db');

const Category = db.define('Category', {
  id_category: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  status: {
    type: DataTypes.TINYINT,
    defaultValue: 1,
    allowNull: true,
  },
}, {
  tableName: 'categories',
  timestamps: false, // Si no usas createdAt/updatedAt en la tabla
});

module.exports = Category;
