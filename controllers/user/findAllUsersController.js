const userService = require('../../services/userService');

const findAll = async (_req, res, next) => {
  try {
    const result = await userService.findAll();
    return res.status(result.code).json(result.payload);
  } catch (error) {
    next(error);
  }
};

module.exports = findAll;