const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

router.get('/register', (req, res) => {
  res.render('auth/register');
});
router.get('/login', (req, res) => {
  res.render('auth/login');
});
router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
});

router.post('/register', register);
router.post('/login', login);

module.exports = router;
