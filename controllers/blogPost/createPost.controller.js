const blogPostService = require('../../services/blogPost.service');

const create = async (req, res, next) => {
  try {
    const result = await blogPostService.create(req.body, req.UserId);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = create;