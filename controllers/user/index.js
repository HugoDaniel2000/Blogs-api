const createUser = require('./createUserController');
const findAll = require('./findAllUsersController');
const findById = require('./findByIdController');
const remove = require('./deleteUserController');

module.exports = {
  createUser,
  findAll,
  findById,
  remove,
};