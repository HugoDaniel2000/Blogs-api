const error = (err, req, res, next) => {
  console.log(err);
  if (err.customMessage) {
    res.status(err.status || 500).json({ message: err.customMessage })
  }
  return res.status(500).json({ message: 'error interno' });
}

module.exports = error;