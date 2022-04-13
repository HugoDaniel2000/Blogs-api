const express = require('express');

const router = express.Router();
const userController = require('../controllers/user/index');
const middlewares = require('../middlewares/user');

router.delete('/me', middlewares.validToken, userController.remove);
router.post('/', middlewares.createUser, userController.createUser);
router.get('/:id', middlewares.validToken, userController.findById);
router.get('/', middlewares.validToken, userController.findAll);

module.exports = router;