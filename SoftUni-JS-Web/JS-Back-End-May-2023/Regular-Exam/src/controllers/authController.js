const express = require('express');
const userManager = require('../managers/userManager');
const { errorHandler } = require('../util/errorHandler');

const router = express.Router();

router.get('/register', (req, res) => {
  res.render('auth/register');
});

router.get('/login', (req, res) => {
  res.render('auth/login');
});

router.get('/logout', (req, res) => {
  try {
    res.clearCookie('token');
    res.redirect('/');
  } catch (err) {
    console.log(err.message);
    res.redirect('/');
  }
});

router.post('/register', async (req, res) => {
  try {
    const { email, password, repeatPassword } = req.body;

    await userManager.createUser({
      email,
      password,
      repeatPassword,
    });
    const token = await userManager.loginUser(email, password);
    res.cookie('token', token, { httpOnly: true });

    res.redirect('/');
  } catch (err) {
    const error = errorHandler(err);
    res.render('auth/register', { error });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const token = await userManager.loginUser(email, password);
    res.cookie('token', token, { httpOnly: true });
    res.redirect('/');
  } catch (err) {
    const error = errorHandler(err);
    res.render('auth/login', { error });
  }
});

module.exports = router;
