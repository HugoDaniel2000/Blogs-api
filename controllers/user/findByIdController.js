const userService = require('../../services/userService');

const findById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await userService.findById(id);
    return res.status(result.code).json(result.payload);
  } catch (error) {
    next(error);
  }
};

module.exports = findById;