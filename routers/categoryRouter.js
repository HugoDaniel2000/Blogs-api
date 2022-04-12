const express = require('express');

const router = express.Router();
const categoryController = require('../controllers/category/index');
const middlewares = require('../middlewares/user');
const middlewaresCategory = require('../middlewares/category');

router.post('/',
middlewares.validToken,
middlewaresCategory.nameValidate,
categoryController.createCategory);

module.exports = router;