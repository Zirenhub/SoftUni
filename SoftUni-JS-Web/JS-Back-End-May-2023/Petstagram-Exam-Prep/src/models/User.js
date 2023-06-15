const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: [true, 'Username already exists'],
      minLength: [2, 'Username should be at least 2 characters long'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      minLength: [10, 'Email should be at least 10 characters long'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minLength: [4, 'Password should be at least 4 characters long'],
    },
  },
  { timestamps: true }
);

UserSchema.pre('save', async function (next) {
  if (this.isModified('password') || this.isNew) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  }
});

UserSchema.virtual('repeatPassword').set(function (value) {
  if (value !== this.password) {
    throw new Error('Password missmatch!');
  }
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
