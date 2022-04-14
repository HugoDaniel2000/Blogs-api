const { Op } = require('sequelize');
const { BlogPost, Category, User } = require('../models');

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

const findAll = async () => {
const posts = await BlogPost.findAll({ include: [{ model: User, as: 'user' },
{ model: Category, as: 'categories', through: { attributes: [] } }] });
return { code: 200, payload: posts };
};

const findById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [{ model: User, as: 'user' },
  { model: Category, as: 'categories', through: { attributes: [] } }] });
  if (!post) {
    return { code: 404, payload: { message: 'Post does not exist' } };
  }
  return { code: 200, payload: post };
};

const update = async ({ title, content }, userId, id) => {
  const post = await BlogPost.findOne({ where: { id } });
  console.log(post);
  if (!post || userId !== post.dataValues.userId) {
    return { code: 401, payload: { message: 'Unauthorized user' } };
  }
  await BlogPost.update({ title, content }, { where: { id } });
  const postUpdated = await BlogPost.findOne({
    where: { id },
    attributes: { exclude: ['published', 'updated'] },
    include: [{ model: Category, as: 'categories', through: { attributes: [] } }] });
  return { code: 200, payload: postUpdated };
};

const remove = async (userId, id) => {
  const post = await BlogPost.findOne({ where: { id } });
  if (!post) {
    return { code: 404, payload: { message: 'Post does not exist' } };
  }
  if (userId !== post.dataValues.userId) {
    return { code: 401, payload: { message: 'Unauthorized user' } };
  }
  await BlogPost.destroy({ where: { id } });
  return { code: 204, payload: [] };
};

const searchTerm = async (query) => {
  const postAll = await BlogPost.findAll({ include: [{ model: User, as: 'user' },
{ model: Category, as: 'categories', through: { attributes: [] } }] });
    console.log(postAll);
  if (query.length === 0) {
    return { code: 200, payload: postAll };
  }
    const post = await BlogPost.findAll({
      where: { [Op.or]: [{ title: query }, { content: query }] },
      include:
        [{ model: User, as: 'user', attributes: { exclude: 'password' } },
        { model: Category, as: 'categories', through: { attributes: [] } }],
    });
  return { code: 200, payload: post };
};

module.exports = {
  create,
  findAll,
  findById,
  update,
  remove,
  searchTerm,
};