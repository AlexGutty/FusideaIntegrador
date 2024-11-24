/**
 * Representa un mensaje en el sistema de chat.
 * @typedef {Object} Message
 * @property {number} id_messages - ID único del mensaje
 * @property {number} senderId - ID del usuario que envía el mensaje
 * @property {number} receivedId - ID del usuario que recibe el mensaje
 * @property {string} message - Contenido del mensaje
 * @property {string} createdAt - Fecha y hora de creación del mensaje
 * @property {string} updatedAt - Fecha y hora de la última actualización del mensaje
 * @property {number} chatRoomId - ID de la sala de chat a la que pertenece el mensaje
 */

/**
 * Representa una sala de chat.
 * @typedef {Object} ChatRoom
 * @property {number} id - ID único de la sala de chat
 * @property {string} name - Nombre de la sala de chat
 */

/**
 * Representa un usuario del sistema de chat.
 * @typedef {Object} User
 * @property {number} id - ID único del usuario
 * @property {string} username - Nombre de usuario
 * @property {string} email - Correo electrónico del usuario
 */

// Puedes exportar estas definiciones si necesitas usarlas en otros archivos
export const ChatInterfaces = {
    Message: null,
    ChatRoom: null,
    User: null
  };
  
  