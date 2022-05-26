const blogPostService = require('../../services/blogPostService');

const searchTerm = async (req, res, next) => {
  const { q } = req.query;
  try {
    const result = await blogPostService.searchTerm(q);
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = searchTerm;