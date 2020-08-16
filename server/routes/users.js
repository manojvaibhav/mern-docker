var express = require('express');
var router = express.Router();
var userController = require('../controllers/User/User.controller');

/* Login User */
router.post('/login', userController.loginUser);

/* Register User */
router.post('/register', userController.registerUser);

// Get User Details
router.get('/:id', userController.getUserDetails)

module.exports = router;
