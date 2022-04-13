const blogPostService = require('../../services/blogPostService');

const remove = async (req, res, next) => {
    const { id } = req.params;
  try {
    const result = await blogPostService.remove(req.UserId, id);
    return res.status(result.code).json(result.payload);
  } catch (error) {
    next(error);
  }
};

module.exports = remove;