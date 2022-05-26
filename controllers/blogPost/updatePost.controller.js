const blogPostService = require('../../services/blogPost.service');

const update = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await blogPostService.update(req.body, req.UserId, id);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = update;