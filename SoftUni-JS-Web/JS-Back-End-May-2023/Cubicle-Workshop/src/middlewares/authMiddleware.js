const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    try {
      const user = jwt.verify(token, process.env.JWT_SECRET);
      req.user = user;
      next();
    } catch (err) {
      res.clearCookie('token');
      res.redirect('/auth/login');
    }
  } else {
    next();
  }
};

module.exports = authMiddleware;
