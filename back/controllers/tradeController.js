const Trade = require('../models/Trade');
const ChatRoom = require('../models/ChatRoom');

exports.createTrade = async (req, res) => {
  const {
    memberOne_id,
    memberOne_specialty,
    memberTwo_id,
    memberTwo_specialty,
    duration,
    expiresAt
  } = req.body;

  try {
    // Verificar si ya existe un Trade pendiente entre estos dos usuarios
    const existingTrade = await Trade.findOne({
      memberOne_id,
      memberTwo_id,
      status: 'PENDING'
    });

    if (existingTrade) {
      return res.status(400).json({ error: 'Ya existe una solicitud de Trade pendiente entre estos usuarios' });
    }

    // Crear el nuevo Trade
    const trade = await Trade.create({
      memberOne_id,
      memberOne_specialty,
      memberTwo_id,
      memberTwo_specialty,
      duration,
      expiresAt
    });

    // Crear un chat asociado al Trade
    const chatRoom = await ChatRoom.create({
      userOne: memberOne_id,
      userTwo: memberTwo_id,
      id_trade: trade._id
    });

    trade.chatRoomId = chatRoom._id;
    await trade.save();

    res.status(201).json({ message: 'Trade creado exitosamente', trade });
  } catch (error) {
    console.error('Error al crear Trade:', error);
    res.status(500).json({ error: 'Error al crear Trade' });
  }
};

exports.acceptTrade = async (req, res) => {
    const { tradeId } = req.params;
  
    try {
      const trade = await Trade.findById(tradeId);
  
      if (!trade) {
        return res.status(404).json({ error: 'Trade no encontrado' });
      }
  
      if (trade.status !== 'PENDING') {
        return res.status(400).json({ error: 'El Trade ya ha sido aceptado o finalizado' });
      }
  
      trade.status = 'ACCEPTED';
      await trade.save();
  
      res.status(200).json({ message: 'Trade aceptado exitosamente', trade });
    } catch (error) {
      console.error('Error al aceptar Trade:', error);
      res.status(500).json({ error: 'Error al aceptar Trade' });
    }
  };

  exports.finishTrade = async (req, res) => {
    const { tradeId } = req.params;
  
    try {
      const trade = await Trade.findById(tradeId);
  
      if (!trade) {
        return res.status(404).json({ error: 'Trade no encontrado' });
      }
  
      if (trade.status !== 'ACCEPTED') {
        return res.status(400).json({ error: 'El Trade debe estar aceptado para finalizarlo' });
      }
  
      trade.status = 'FINISHED';
      await trade.save();
  
      res.status(200).json({ message: 'Trade finalizado exitosamente', trade });
    } catch (error) {
      console.error('Error al finalizar Trade:', error);
      res.status(500).json({ error: 'Error al finalizar Trade' });
    }
  };

  exports.getUserTrades = async (req, res) => {
    const { userId } = req.params;
  
    try {
      const trades = await Trade.find({
        $or: [{ memberOne_id: userId }, { memberTwo_id: userId }]
      }).populate('memberOne_id memberTwo_id memberOne_specialty memberTwo_specialty');
  
      res.status(200).json({ trades });
    } catch (error) {
      console.error('Error al obtener Trades:', error);
      res.status(500).json({ error: 'Error al obtener Trades' });
    }
  };
  
   