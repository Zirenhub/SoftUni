const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    try {
      const user = jwt.verify(token, process.env.JWT_SECRET);
      req.user = user;
      res.locals.user = user;
      res.locals.isAuthenticated = true;
      next();
    } catch (err) {
      res.clearCookie('token');
      res.redirect('/auth/login');
    }
  } else {
    next();
  }
};

const isAuth = (req, res, next) => {
  if (!req.user) {
    return res.redirect('/auth/login');
  }

  next();
};

module.exports = { authMiddleware, isAuth };
