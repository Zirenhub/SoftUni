const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CubeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    difficultyLevel: {
      type: Number,
      required: true,
    },
    accessories: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Accessory',
      },
    ],
  },
  { timestamps: true }
);

const CubeModel = mongoose.model('Cube', CubeSchema);

module.exports = CubeModel;
