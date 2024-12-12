const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');
const Role = require('./Role');
const Specialty = require('./Specialty'); // Importar el modelo Specialty

const User = sequelize.define('User', {
  id_user: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_speciality: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Specialty, // Referencia al modelo Specialty
      key: 'id_speciality',
    },
  },
  id_role: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Role,
      key: 'id_role',
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.ENUM('MASCULINO', 'FEMENINO', 'OTRO'),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email_verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  average_rating: {
    type: DataTypes.DECIMAL(3, 2),
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  banner: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  aboutname: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  phoneNumber: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  token_password: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
}, {
  tableName: 'users',
  timestamps: false,
});

// Relaciones
User.belongsTo(Role, { foreignKey: 'id_role', as: 'Role' });
User.belongsTo(Specialty, { foreignKey: 'id_speciality', as: 'Specialty' }); // Relación con Specialty

module.exports = User;


