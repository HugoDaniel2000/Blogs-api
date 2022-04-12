const { Category } = require('../models');

const create = async ({ name }) => {
  const category = await Category.create({ name });
  return { code: 201, payload: category };
};

module.exports = {
  create,
};