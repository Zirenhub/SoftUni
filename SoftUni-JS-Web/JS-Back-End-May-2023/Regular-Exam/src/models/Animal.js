const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AnimalSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      minLength: [2, 'Name should be at least 2 characters long'],
    },
    years: {
      type: Number,
      required: [true, 'Years is required'],
      min: [1, 'Years should be at least 1'],
      max: [100, 'Years should not exceed 100'],
    },
    kind: {
      type: String,
      required: [true, 'Kind is required'],
      minLength: [3, 'Kind should be at least 3 characters long'],
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
    need: {
      type: String,
      required: [true, 'Need is required'],
      minLength: [3, 'Need should be at least 3 characters long'],
      maxLength: [20, 'Need should not exceed 20 characters'],
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
      minLength: [5, 'Location should be at least 5 characters long'],
      maxLength: [15, 'Description should not exceed 15 characters'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      minLength: [5, 'Description should be at least 5 characters long'],
      maxLength: [50, 'Description should not exceed 50 characters'],
    },
    donations: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Donation Id is required'],
      },
    ],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Owner is required'],
    },
  },
  { timestamps: true }
);

const AnimalModel = mongoose.model('Animal', AnimalSchema);

module.exports = AnimalModel;
