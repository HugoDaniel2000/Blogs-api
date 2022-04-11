const { User } = require('../models');
const Token = require('../helper/jwt/token.auth');

const login = async ({ email, password }) => {
  const userExist = await User.findOne({ where: { email, password } });
  if (!userExist) {
    return { code: 400, payload: { message: 'Invalid fields' } };
  }
  const token = await Token.generate({ payload: email });
  return { code: 200, payload: { token } };
};

module.exports = login;