const express = require('express');

const router = express.Router();
const blogPostController = require('../controllers/blogPost/index');
const middlewares = require('../middlewares/user');
const middlewaresBlogPost = require('../middlewares/blogPost');

router.post('/',
middlewares.validToken,
middlewaresBlogPost.createPost,
blogPostController.createPost);

router.get('/', middlewares.validToken, blogPostController.findAll);

module.exports = router;