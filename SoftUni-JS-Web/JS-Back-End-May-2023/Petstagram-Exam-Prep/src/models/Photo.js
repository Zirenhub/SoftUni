const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PhotoSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      minLength: [2, 'Name should be at least 2 characters long'],
    },
    image: {
      type: String,
      required: [true, 'Image is required'],
      validate: {
        validator: function (v) {
          return /^https?:\/\//i.test(v);
        },
        message: (props) =>
          `${props.value} is not a valid URL starting with "http://" or "https://"`,
      },
    },
    age: {
      type: Number,
      required: [true, 'Age is required'],
      min: 1,
      max: 100,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      minLength: [5, 'Description should be at least 5 characters long'],
      maxLength: [50, 'Description should be no longer than 50 characters'],
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
      minLength: [5, 'Location should be at least 5 characters long'],
      maxLength: [50, 'Location should be no longer than 50 characters'],
    },
    commentList: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          required: [true, 'User is required'],
          ref: 'User',
        },
        comment: {
          type: String,
          required: [true, 'Comment is required'],
        },
      },
    ],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'Owner is required'],
      ref: 'User',
    },
  },
  { timestamps: true }
);

const PhotoModel = mongoose.model('Photo', PhotoSchema);

module.exports = PhotoModel;
