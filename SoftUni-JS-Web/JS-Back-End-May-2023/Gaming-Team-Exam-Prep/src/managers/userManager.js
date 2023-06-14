const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');
const { JWT_SECRET } = require('../config');
const userModel = require('../models/User');

const createUser = async (userData) => {
  const { username, email, password } = userData;
  // repeat password check is happening inside the schema.
  if (username.length < 5) {
    throw new Error('Username length should be higher than 5 characters');
  }
  if (email.length < 10) {
    throw new Error('Email length should be higher than 10 characters');
  }
  if (password.length < 4) {
    throw new Error('Password length should be higher than 4 characters');
  }

  const newUser = new userModel(userData);
  await newUser.save();
  return newUser;
};

const loginUser = async (email, password) => {
  const user = await userModel.findOne({ email }).lean();
  if (!user) {
    throw new Error('Wrong email or password');
  }

  const passwordIsMatch = await bcrypt.compare(password, user.password);
  if (!passwordIsMatch) {
    throw new Error('Wrong email or password');
  }

  const token = await jwt.sign(user, JWT_SECRET, { expiresIn: '2d' });
  return token;
};

module.exports = {
  createUser,
  loginUser,
};
