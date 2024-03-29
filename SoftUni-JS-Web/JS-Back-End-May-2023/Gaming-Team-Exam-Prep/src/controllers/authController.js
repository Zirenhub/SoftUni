const express = require('express');
const router = express.Router();

const userManager = require('../managers/userManager');

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
    const { username, email, password, repeatPassword } = req.body;

    await userManager.createUser({
      username,
      email,
      password,
      repeatPassword,
    });

    res.redirect('/');
  } catch (err) {
    res.render('auth/register', { error: err.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const token = await userManager.loginUser(email, password);
    res.cookie('token', token, { httpOnly: true });
    res.redirect('/');
  } catch (err) {
    res.render('auth/login', { error: err.message });
  }
});

module.exports = router;
