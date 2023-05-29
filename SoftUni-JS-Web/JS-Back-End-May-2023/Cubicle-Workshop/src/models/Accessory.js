const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccessorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      maxLength: 30,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const AccessoryModel = mongoose.model('Accessory', AccessorySchema);

export default AccessoryModel;
