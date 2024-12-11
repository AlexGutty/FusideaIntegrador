const sequelize = require('../utils/db');
const Certification = require('./Certification');
const CollaborativeProject = require('./CollaborativeProject');
const Message = require('./Message');
const Notification = require('./Notification');
const Role = require('./Role');
const Specialty = require('./Specialty');
const Trade = require('./Trade');
const User = require('./User');
const UserInterest = require('./UserInterest');
const UserRating = require('./UserRating');

// Aquí puedes asociar los modelos si es necesario
// Por ejemplo:
// User.hasMany(Message);
// Message.belongsTo(User);

const syncModels = async () => {
  try {
    await sequelize.sync({ alter: true }); // 'alter' actualiza la BD sin borrar datos existentes
    console.log('Modelos sincronizados');
  } catch (error) {
    console.error('Error al sincronizar los modelos:', error);
  }
};

syncModels();

module.exports = {
  sequelize,
  Certification,
  CollaborativeProject,
  Message,
  Notification,
  Role,
  Specialty,
  Trade,
  User,
  UserInterest,
  UserRating,
};
