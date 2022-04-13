const createPost = require('./createPostController');
const findAll = require('./findAllPostController');
const findById = require('./findByIdPostController');
const update = require('./updatePostController');

module.exports = {
  createPost,
  findAll,
  findById,
  update,
};
