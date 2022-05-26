const { User } = require('../models');
const Token = require('../helper/jwt/token.auth');
const generateError = require('../helpers/generateError');

const login = async ({ email, password }) => {
  const result = await User.findOne({
    where: { email, password },
    attributes: { exclude: ['password', 'displayName', 'image'] },
  });
  if (!result) {
    throw generateError({ status: 400, message: 'Invalid fields' });
  }
  const token = await Token.generate({ payload: result });
  return { token };
};

module.exports = login;