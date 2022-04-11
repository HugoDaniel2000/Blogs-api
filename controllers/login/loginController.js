const loginService = require('../../services/loginService');

const login = async (req, res, next) => {
  try {
    const result = await loginService(req.body);
    return res.status(result.code).json(result.payload);
  } catch (error) {
    next(error);
  }
};

module.exports = login;