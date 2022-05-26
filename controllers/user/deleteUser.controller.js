const userService = require('../../services/user.service');

const remove = async (req, res, next) => {
  try {
    const result = await userService.remove(req.UserId);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = remove;