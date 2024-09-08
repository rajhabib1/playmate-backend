const Message = require('../models/Message');

// Send a message
exports.sendMessage = async (req, res) => {
  try {
    const message = new Message(req.body);
    await message.save();
    res.status(201).json(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all messages for a user
exports.getUserMessages = async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [{ senderId: req.params.userId }, { receiverId: req.params.userId }]
    });
    res.json(messages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
