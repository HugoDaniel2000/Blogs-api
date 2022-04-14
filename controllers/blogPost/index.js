const createPost = require('./createPostController');
const findAll = require('./findAllPostController');
const findById = require('./findByIdPostController');
const update = require('./updatePostController');
const remove = require('./deletePostController');
const searchTerm = require('./searchTermPostController');

module.exports = {
  createPost,
  findAll,
  findById,
  update,
  remove,
  searchTerm,
};
