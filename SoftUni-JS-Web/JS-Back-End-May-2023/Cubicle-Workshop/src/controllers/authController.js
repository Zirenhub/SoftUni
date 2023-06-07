const UserModel = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  try {
    const { username, password, repeatPassword } = req.body;
    const user = await UserModel.exists({ username });
    if (user) {
      res.send('User already exists');
    } else {
      const newUser = new UserModel({ username, password, repeatPassword });
      await newUser.save();
      res.redirect('/auth/login');
    }
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username }).lean();
    if (!user) {
      res.send('Wrong username or password');
    } else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        const token = jwt.sign(user, process.env.JWT_SECRET, {
          expiresIn: '2d',
        });
        res.cookie('token', token, { httpOnly: true });
        res.redirect('/');
      } else {
        res.send('Wrong username or password');
      }
    }
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

module.exports = {
  register,
  login,
};
