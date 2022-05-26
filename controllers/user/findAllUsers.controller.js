const userService = require('../../services/user.service');

const findAll = async (_req, res, next) => {
  try {
    const result = await userService.findAll();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = findAll;