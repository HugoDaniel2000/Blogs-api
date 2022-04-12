const createUser = require('./createUserController');
const findAll = require('./findAllUsersController');
const findById = require('./findByIdController');

module.exports = {
  createUser,
  findAll,
  findById,
};