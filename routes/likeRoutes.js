const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');

// Like a post
router.post('/:postId/like', likeController.likePost);

// Unlike a post
router.post('/:postId/unlike', likeController.unlikePost);

// Get likes for a post
router.get('/:postId/likes', likeController.getLikes);

module.exports = router;
