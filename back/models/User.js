const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');
const Role = require('./Role');

const User = sequelize.define('User', {
  id_user: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_speciality: {
    type: DataTypes.INTEGER,
    allowNull: true,
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

User.belongsTo(Role, { foreignKey: 'id_role', as: 'Role' });

module.exports = User;

