const middlewares = {};

const titleValidate = (req, res, next) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({
   message: '"title" is required',
    });
  }
  next();
};

const contentValidate = (req, res, next) => {
  const { content } = req.body;
  if (!content) {
    return res.status(400).json({
   message: '"content" is required',
    });
  }
  next();
};

const categoryIdValidate = (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds) {
    return res.status(400).json({
   message: '"categoryIds" is required',
    });
  }
  next();
};

middlewares.createPost = [titleValidate, contentValidate, categoryIdValidate];

module.exports = middlewares;