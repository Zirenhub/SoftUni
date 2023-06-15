const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PhotoSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    image: {
      type: String,
      required: [true, 'Image is required'],
    },
    age: {
      type: Number,
      required: [true, 'Age is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
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
