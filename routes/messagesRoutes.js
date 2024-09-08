const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// Define routes for messages
router.post('/', messageController.sendMessage);
router.get('/conversation/:userId', messageController.getUserMessages);

module.exports = router;
