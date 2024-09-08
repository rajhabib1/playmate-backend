const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Define routes for comments
router.post('/', commentController.createComment);
router.get('/:id', commentController.getComment);
router.delete('/:id', commentController.deleteComment);

module.exports = router;
