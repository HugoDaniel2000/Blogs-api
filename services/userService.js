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

module.exports = {
  create,
};