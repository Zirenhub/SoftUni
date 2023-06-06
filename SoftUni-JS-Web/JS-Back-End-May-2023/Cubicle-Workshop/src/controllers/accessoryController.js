const AccessoryModel = require('../models/Accessory');
const CubeModel = require('../models/Cube');
const mongoose = require('mongoose');

const createAccessory = async (req, res) => {
  try {
    const { name, description, imageUrl } = req.body;
    if (!name || !description || !imageUrl) {
      res.end('All fields should be filled.');
    } else {
      const newAccessory = new AccessoryModel({ name, description, imageUrl });
      await newAccessory.save();
      res.redirect('/');
    }
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

const getAttachAccessory = async (req, res) => {
  try {
    const cubeId = req.params.id;
    const cube = await CubeModel.findById(cubeId).lean();
    const accessories = await AccessoryModel.find({
      _id: { $nin: cube.accessories },
    }).lean();

    const hasAccessories = accessories.length > 0;

    res.render('accessory/attach', { cube, accessories, hasAccessories });
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

const postAttachAccessory = async (req, res) => {
  try {
    const { accessory } = req.body;
    const cubeId = req.params.id;
    // validate that the accessory isnt attach in the first place.
    const accessoryObjectId = new mongoose.Types.ObjectId(accessory.trim());
    await CubeModel.findByIdAndUpdate(cubeId, {
      $push: { accessories: accessoryObjectId },
    });

    res.redirect(`/cube/details/${cubeId}`);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
};

module.exports = {
  getAttachAccessory,
  postAttachAccessory,
  createAccessory,
};
