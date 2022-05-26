const { User } = require('../models');
const Token = require('../helper/jwt/token.auth');
const generateError = require('../helpers/generateError');

const create = async ({ displayName, email, password, image }) => {
  const userExist = await User.findOne({ where: { email } });
  if (userExist) {
    throw generateError({ status: 409, message: 'User already registered' });
  }
  const user = await User.create({ displayName, email, password, image });
  const token = await Token.generate({ payload: user.id });

  return { token };
};

const findAll = async () => {
  const users = await User.findAll();
  return users;
};

const findById = async (id) => {
  const user = await User.findOne({ where: { id } });
  if (!user) {
    throw generateError({ status: 404, message: 'User does not exist' });
  }
  return user;
};

const remove = async (userId) => {
  await User.destroy({ where: { id: userId } });
};

module.exports = {
  create,
  findAll,
  findById,
  remove,
};