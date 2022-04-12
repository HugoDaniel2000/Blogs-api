const { BlogPost, Category } = require('../models');

const create = async ({ title, content, categoryIds }, userId) => {
  console.log(userId);
  const result = categoryIds.map(async (id) => Category.findOne({ where: { id } }));
  const existCategory = await Promise.all(result).then((data) => data.every((e) => e !== null));
  if (!existCategory) {
    return { code: 400, payload: { message: '"categoryIds" not found' } };
  }
  const post = await BlogPost.create({ title, userId, content });

  return { code: 201, payload: post };
};

module.exports = {
  create,
};