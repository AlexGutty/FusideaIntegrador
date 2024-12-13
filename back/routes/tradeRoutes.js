const express = require('express');
const router = express.Router();
const tradeController = require('../controllers/tradeController');

// Crear un nuevo Trade
router.post('/create', tradeController.createTrade);

// Aceptar un Trade
router.put('/:tradeId/accept', tradeController.acceptTrade);

// Finalizar un Trade
router.put('/:tradeId/finish', tradeController.finishTrade);

// Obtener Trades de un usuario
router.get('/user/:userId', tradeController.getUserTrades);

module.exports = router;
