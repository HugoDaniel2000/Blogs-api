const { Category } = require('../models');

const create = async ({ name }) => {
  const category = await Category.create({ name });
  return { code: 201, payload: category };
};

const findAll = async () => {
  const categories = await Category.findAll();
  return { code: 200, payload: categories };
};

module.exports = {
  create,
  findAll,
};