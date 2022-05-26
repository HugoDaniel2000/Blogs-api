const categoryService = require('../../services/category.service');

const findAll = async (_req, res, next) => {
  try {
    const result = await categoryService.findAll();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = findAll;