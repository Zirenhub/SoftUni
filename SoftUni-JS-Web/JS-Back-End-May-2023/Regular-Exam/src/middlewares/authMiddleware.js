const jwt = require('../lib/jwt');
const { JWT_SECRET } = require('../config');

const Authenticate = async (req, res, next) => {
  const token = req.cookies['token'];

  if (token) {
    try {
      const user = await jwt.verify(token, JWT_SECRET);
      req.user = user;
      res.locals.user = user;
      res.locals.isAuthenticated = true;
      next();
    } catch (err) {
      console.log(err.message);
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

module.exports = {
  Authenticate,
  isAuth,
};
