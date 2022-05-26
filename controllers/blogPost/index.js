const createPost = require('./createPost.controller');
const findAll = require('./findAllPost.controller');
const findById = require('./findByIdPost.controller');
const update = require('./updatePost.controller');
const remove = require('./deletePost.controller');
const searchTerm = require('./searchTermPost.controller');

module.exports = {
  createPost,
  findAll,
  findById,
  update,
  remove,
  searchTerm,
};
