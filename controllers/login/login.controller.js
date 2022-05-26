const loginService = require('../../services/login.service');

const login = async (req, res, next) => {
  try {
    const result = await loginService(req.body);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = login;