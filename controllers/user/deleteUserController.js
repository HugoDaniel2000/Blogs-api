const userService = require('../../services/userService');

const remove = async (req, res, next) => {
  try {
    const result = await userService.remove(req.UserId);
    return res.status(result.code).end();
  } catch (error) {
    next(error);
  }
};

module.exports = remove;