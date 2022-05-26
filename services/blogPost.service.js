const { Op } = require('sequelize');
const generateError = require('../helpers/generateError');
const { BlogPost, Category, User } = require('../models');

const create = async ({ title, content, categoryIds }, userId) => {
  console.log(userId);
  const result = categoryIds.map(async (id) => Category.findOne({ where: { id } }));
  const existCategory = await Promise.all(result).then((data) => data.every((e) => e !== null));
  if (!existCategory) {
    throw generateError({ status: 400, message: '"categoryIds" not found' });
  }
  const post = await BlogPost.create({ title, userId, content });
  return post;
};

const findAll = async () => {
  const posts = await BlogPost.findAll({
    include: [{ model: User, as: 'user' },
    { model: Category, as: 'categories', through: { attributes: [] } }]
  });
  return posts;
};

const findById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [{ model: User, as: 'user' },
    { model: Category, as: 'categories', through: { attributes: [] } }]
  });
  if (!post) {
    throw generateError({ status: 404, message: 'Post does not exist' });
  }
  return post;
};

const update = async ({ title, content }, userId, id) => {
  const post = await BlogPost.findOne({ where: { id } });
  if (!post || userId !== post.dataValues.userId) {
    throw generateError({ status: 401, message: 'Unauthorized user' });
  }
  await BlogPost.update({ title, content }, { where: { id } });
  const postUpdated = await BlogPost.findOne({
    where: { id },
    attributes: { exclude: ['published', 'updated'] },
    include: [{ model: Category, as: 'categories', through: { attributes: [] } }]
  });
  return postUpdated;
};

const remove = async (userId, id) => {
  const post = await BlogPost.findOne({ where: { id } });
  if (!post) {
    throw generateError({ status: 404, message: 'Post does not exist' });
  }
  if (userId !== post.dataValues.userId) {
    throw generateError({ status: 401, message: 'Unauthorized user' });
  }
  await BlogPost.destroy({ where: { id } });
};

const searchTerm = async (query) => {
  if (query.length === 0) {
    const postAll = await BlogPost.findAll({
      include: [{ model: User, as: 'user' },
      { model: Category, as: 'categories', through: { attributes: [] } }]
    });
    return postAll;
  }
  console.log(query);
  const post = await BlogPost.findAll({
    where: { [Op.or]: [{ title: query }, { content: query }] },
    include:
      [{ model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } }],
  });
  return post;
};

module.exports = {
  create,
  findAll,
  findById,
  update,
  remove,
  searchTerm,
};