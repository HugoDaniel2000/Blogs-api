const express = require('express');

const router = express.Router();
const userController = require('../controllers/user/index');
const middlewares = require('../middlewares/user');

router.post('/', middlewares.user, userController.createUser);

module.exports = router;