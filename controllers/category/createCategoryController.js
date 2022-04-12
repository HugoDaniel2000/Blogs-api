const categoryService = require('../../services/categoryService');

const create = async (req, res, next) => {
  try {
    const result = await categoryService.create(req.body);
    return res.status(result.code).json(result.payload);
  } catch (error) {
    next(error);
  }
};

module.exports = create;