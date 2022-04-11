const userService = require('../../services/userService');

const create = async (req, res, next) => {
  try {
    const result = await userService.create(req.body);
    return res.status(result.code).json(result.payload);
  } catch (error) {
    next(error);
  }
};

module.exports = create;