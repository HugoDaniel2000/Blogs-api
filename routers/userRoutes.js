const express = require('express');

const router = express.Router();
const userController = require('../controllers/user/index');
const middlewares = require('../middlewares/user');

router.post('/', middlewares.createUser, userController.createUser);
router.get('/', middlewares.validToken, userController.findAll);

module.exports = router;