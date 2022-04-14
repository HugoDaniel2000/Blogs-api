const blogPostService = require('../../services/blogPostService');

const searchTerm = async (req, res, next) => {
  const { q } = req.query;
  try {
    const result = await blogPostService.searchTerm(q);
    return res.status(result.code).json(result.payload);
  } catch (error) {
    next(error);
  }
};

module.exports = searchTerm;