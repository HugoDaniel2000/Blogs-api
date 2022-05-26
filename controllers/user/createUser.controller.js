const userService = require('../../services/user.service');

const create = async (req, res, next) => {
  try {
    const result = await userService.create(req.body);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = create;