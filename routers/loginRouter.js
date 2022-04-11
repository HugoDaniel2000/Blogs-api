const express = require('express');

const router = express.Router();
const loginController = require('../controllers/login/loginController');
const middlewares = require('../middlewares/login');

router.post('/', middlewares.login, loginController);

module.exports = router;