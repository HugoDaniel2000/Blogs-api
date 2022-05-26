const userService = require('../../services/user.service');

const findById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await userService.findById(id);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = findById;