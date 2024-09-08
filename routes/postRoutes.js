const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Define routes for posts
router.post('/', postController.createPost);
router.get('/:id', postController.getPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);
router.get('/user/:userId', postController.getUserPosts);

module.exports = router;
