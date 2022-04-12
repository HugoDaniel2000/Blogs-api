const blogPostService = require('../../services/blogPostService');

const create = async (req, res, next) => {
  try {
    const result = await blogPostService.create(req.body, req.UserId);
    return res.status(result.code).json(result.payload);
  } catch (error) {
    next(error);
  }
};

module.exports = create;