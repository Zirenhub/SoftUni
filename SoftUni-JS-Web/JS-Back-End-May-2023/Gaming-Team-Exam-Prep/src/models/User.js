const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

// CHANGE UNIQUE DEPENDING ON WHAT IS GIVEN ON EXAM.
// SKELETON USES EMAIL AS A UNIQUE KEY

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
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
