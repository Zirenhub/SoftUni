const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');
const { JWT_SECRET } = require('../config');
const userModel = require('../models/User');

const createUser = async (userData) => {
  // dont depend on mongoose validation and check for a existing user here ?
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
