const { User } = require('../models');
const Token = require('../helper/jwt/token.auth');

const login = async ({ email, password }) => {
  const result = await User.findOne({
    where: { email, password },
    attributes: { exclude: ['password', 'displayName', 'image'] },
  });
  if (!result) {
    return { code: 400, payload: { message: 'Invalid fields' } };
  }
  const token = await Token.generate({ payload: result });
  return { code: 200, payload: { token } };
};

module.exports = login;