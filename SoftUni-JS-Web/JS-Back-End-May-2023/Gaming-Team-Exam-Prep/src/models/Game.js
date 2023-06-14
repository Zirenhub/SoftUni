const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GameSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    image: {
      type: String,
      required: [true, 'Image is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    genre: {
      type: String,
      required: [true, 'Genre is required'],
    },
    platform: {
      type: String,
      required: [true, 'Platform is required'],
      enum: ['PC', 'Nintendo', 'PS4', 'PS5', 'XBOX'],
    },
    boughtBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'Owner is required'],
      ref: 'User',
    },
  },
  { timestamps: true }
);

const GameModel = mongoose.model('Game', GameSchema);

module.exports = GameModel;
