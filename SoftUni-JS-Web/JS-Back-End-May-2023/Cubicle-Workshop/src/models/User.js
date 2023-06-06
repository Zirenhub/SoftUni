const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
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
    throw new mongoose.MongooseError('Password missmatch!');
  }
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
