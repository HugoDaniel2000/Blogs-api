const express = require('express');

const router = express.Router();
const blogPostController = require('../controllers/blogPost/index');
const middlewares = require('../middlewares/user');
const middlewaresBlogPost = require('../middlewares/blogPost');

router.get('/search', middlewares.validToken, blogPostController.searchTerm);

router.put('/:id',
middlewares.validToken,
middlewaresBlogPost.updatePost,
blogPostController.update);

router.delete('/:id', middlewares.validToken, blogPostController.remove);

router.post('/',
middlewares.validToken,
middlewaresBlogPost.createPost,
blogPostController.createPost);

router.get('/:id', middlewares.validToken, blogPostController.findById);
router.get('/', middlewares.validToken, blogPostController.findAll);

module.exports = router;