const categoryService = require('../../services/categoryService');

const findAll = async (_req, res, next) => {
  try {
    const result = await categoryService.findAll();
    return res.status(result.code).json(result.payload);
  } catch (error) {
    next(error);
  }
};

module.exports = findAll;