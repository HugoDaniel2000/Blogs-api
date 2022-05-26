const blogPostService = require('../../services/blogPost.service');

const remove = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await blogPostService.remove(req.UserId, id);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = remove;