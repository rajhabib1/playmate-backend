const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes for users
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
