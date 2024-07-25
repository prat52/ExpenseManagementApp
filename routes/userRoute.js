const express = require('express');
const { loginController, registerController } = require('../controllers/userController');

const router = express.Router();

//POST ROUTE || LOGIN
router.post('/login',loginController)

//POST || REGISTER
router.post('/register',registerController);

module.exports = router;