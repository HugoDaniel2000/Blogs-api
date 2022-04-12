const { User } = require('../models');
const Token = require('../helper/jwt/token.auth');

const create = async ({ displayName, email, password, image }) => {
  const userExist = await User.findOne({ where: { email } });
  if (userExist) {
    return { code: 409, payload: { message: 'User already registered' } };
  }
  const user = await User.create({ displayName, email, password, image });
  const token = await Token.generate({ payload: user.id });

  return { code: 201, payload: { token } };
};

const findAll = async () => {
  const users = await User.findAll();
  return { code: 200, payload: users };
};

const findById = async (id) => {
  const user = await User.findOne({ where: { id } });
  if (!user) {
    return { code: 404, payload: { message: 'User does not exist' } };
  }
  return { code: 200, payload: user };
};

module.exports = {
  create,
  findAll,
  findById,
};