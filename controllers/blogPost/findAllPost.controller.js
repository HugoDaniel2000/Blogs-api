const blogPostService = require('../../services/blogPost.service');

const findAll = async (_req, res, next) => {
  try {
    const result = await blogPostService.findAll();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = findAll;