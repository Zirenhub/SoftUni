const AccessoryModel = require('../models/Accessory');

const createAccessory = async (req, res) => {
  const { name, description, imageUrl } = req.body;
  if (!name || !description || !imageUrl) {
    res.end('All fields should be filled.');
  }
  const newAccessory = new AccessoryModel({ name, description, imageUrl });
  await newAccessory.save();
  res.redirect('/');
};

module.exports = {
  createAccessory,
};
