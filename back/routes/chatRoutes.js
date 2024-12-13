const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// Rutas de mensajería
router.post('/send', chatController.sendMessage);
router.get('/:chatRoomId', chatController.getMessages);

module.exports = router;
