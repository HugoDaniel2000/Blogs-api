const middlewares = {};
const displayNameValidate = (req, res, next) => {
  const { displayName } = req.body;
 const name = displayName.replace(/\s+/g, '');
  if (!displayName || name.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  next();
};

const emailValidate = (req, res, next) => {
  const { email } = req.body;
  if (!email || email.length === 0) {
    return res.status(400).json({
      message: '"email" is required',
    });
  }
  const emailRegex = new RegExp('[a-z0-9]+@[a-z]+[a-z]{2,3}');
  const validate = emailRegex.test(email);
  if (!validate) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }
  next();
};

const passwordValidate = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({
      message: '"password" is required',
    });
  }
  if (password.length !== 6) {
    return res.status(400).json({
      message: '"password" length must be 6 characters long',
    });
  }
  next();
};
middlewares.user = [displayNameValidate, emailValidate, passwordValidate];
module.exports = middlewares;