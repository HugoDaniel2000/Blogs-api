const createUser = require('./createUser.controller');
const findAll = require('./findAllUsers.controller');
const findById = require('./findById.controller');
const remove = require('./deleteUser.controller');

module.exports = {
  createUser,
  findAll,
  findById,
  remove,
};